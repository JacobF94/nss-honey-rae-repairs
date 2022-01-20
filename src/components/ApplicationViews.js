import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/employees"
import { CustomerList } from "./customers/CustomerList"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Ticket } from "./serviceTickets/ticket"
import { Employee } from "./employees/Employee"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/ticket/create">
                <TicketForm />
            </Route>

            <Route exact path="/employee/create">
                <EmployeeForm />
            </Route>
        </>
    )
}