const fetchOptions = (x) => {return{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(x)}
}

const fetchPutOptions = (x) => {return{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(x)
}}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
}

export const hireEmployeeFetch = (data) => {
    return fetch("http://localhost:8088/employees", fetchOptions(data))
}

export const getSpecificEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`)
}

export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
}

export const specificTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "DELETE"
    })
}

export const postNewTicket = (data) => {
    return fetch("http://localhost:8088/serviceTickets", fetchOptions(data))
}

export const ticketPut = (ticketId, data) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, fetchPutOptions(data))
}

export const getSingleTicket = (data) => {
    return fetch(`http://localhost:8088/serviceTickets/${data}?_expand=customer&_expand=employee`)
}

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
}