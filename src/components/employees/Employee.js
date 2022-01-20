import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getSpecificEmployee } from "../ApiManager";

export const Employee = () => {
    const [employee, setEmployee] = useState({})
    const {employeeId} = useParams()

    useEffect(
        () => {
            getSpecificEmployee(employeeId)
                .then(response => response.json())
                .then((data) => {
                    setEmployee(data)
                })
        },
        [ employeeId ]
    )

    return (
        <>
            <h2>Employee Details</h2>
            <section className="employee">
                <h3 className="employee__name">Full name: { employee.name }</h3>
                <div className="employee__specialty">Employee specialty: { employee.specialty }</div>
            </section>
        </>
    )
}