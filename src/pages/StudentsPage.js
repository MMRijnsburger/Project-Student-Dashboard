import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const StudentsPage = (props) => {
    const studentLinks = props.students.map(item => {
        const studentUrl = "/Students/Student/" + item
        return (
            <li key={item}>
                <Link to={studentUrl}>{item}</Link>
            </li>
        )
    })
    return (
        <div className="StudentsPage">
            <h1>Students</h1>
            TODO create links to /students/student/name
            The students are in props.students
            this is an array, string array, of student names
            <Router>
                <ul>
                    {studentLinks}
                </ul>
            </Router>
        </div>
    )
}

export default StudentsPage;