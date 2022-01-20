import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { hireEmployeeFetch } from "../ApiManager";

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        specialty: ""
    });

    const history = useHistory()

    const saveHire = (event) => {
        event.preventDefault()
        
        const newHire = {
            name: employee.name,
            specialty: employee.specialty
        }

        return hireEmployeeFetch(newHire)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name</label>
                    <input
                        required autoFocus
                        type="text" id="hireName"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">specialty</label>
                    <input
                        required autoFocus
                        type="text" id="specialty"
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.specialty = event.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveHire}>
                Finish Hiring
            </button>
        </form>
    )
}