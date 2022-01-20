import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSingleTicket, ticketPut } from "../ApiManager";
import { getAllEmployees } from "../ApiManager";

export const Ticket = () => {
    const [ ticket, setTicket ] = useState({})
    const [ employees, setEmployees] = useState([])
    const { ticketId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            getSingleTicket(ticketId)
                .then(response => response.json())
                .then((data) => {
                    setTicket(data)
                })
        },
        [ ticketId ]
    )

    useEffect(
        () => {
            getAllEmployees()
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



        ticketPut(ticketId, newServiceTicketObject)
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