import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Ticket = () => {
    const [ ticket, setTicket ] = useState({})
    const [ employees, setEmployees] = useState([])
    const { ticketId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(response => response.json())
                .then((data) => {
                    setTicket(data)
                })
        },
        [ ticketId ]
    )

    useEffect(
        () => {
            return fetch("http://localhost:8088/employees")
                .then(response => response.json())
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )

    const assignEmployee = (changeEvent) => {
        const newServiceTicketObject = {
            "description": ticket.description,
            "emergency": ticket.emergency,
            "customerId": parseInt(localStorage.getItem("honey_customer")),
            "employeeId": parseInt(changeEvent.target.value),
            "dateCompleted": ticket.dateCompleted,
        }



        return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newServiceTicketObject)
        })
            .then(() => {
                history.push("/tickets")
            }
            )
    }

    return (
        <>
            <h2>Ticket {ticketId} Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">Description: { ticket.description }</h3>
                <div className="ticket__customer">Submitted by: { ticket.customer?.name }</div>
                <div className="ticket__employee">
                    <select id="employee" onChange={ assignEmployee }>
                        {
                            employees.map(
                                (employee) => {
                                    return <option value={employee.id} key={`employee--${employee.id}`}>
                                        {employee.name}
                                    </option>
                                }
                            )
                        }
                    </select>
                
                </div>
            </section>
        </>
    )
}