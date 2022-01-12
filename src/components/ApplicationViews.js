import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/employees"
import { CustomerList } from "./customers/CustomerList"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/ticket/create">
                <TicketForm />
            </Route>

            <Route path="/employee/create">
                <EmployeeForm />
            </Route>
        </>
    )
}