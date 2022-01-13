import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css"
import { Link } from "react-router-dom"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    const ticketsFetch = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
        .then(res => res.json())
        .then((data) => {
            updateTickets(data)
        })
    }


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(
                ticketsFetch()
            )
    }

    useEffect(() => {ticketsFetch()}, [])

    return (
        <>
        <div>
            <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
        </div>
            {
                    tickets.map(
                        (ticket) => {
                            return <div key={`ticket--${ticket.id}`}>
                                <p className={ticket.emergency ? "emergency" : "ticket"}>
                                    {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                                    <button onClick={() => {deleteTicket(ticket.id)}}>
                                            Delete  
                                    </button>
                                </p>
                                </div>
                        }
                    )
            }
        </>
    )
}   