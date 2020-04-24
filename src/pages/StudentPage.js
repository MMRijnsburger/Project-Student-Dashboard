import React from 'react';
import ChartComponent from '../components/ChartComponent';
import GraphComponent from '../components/GraphComponent';

class StudentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: props.match.params.name
        }
    }

    calculateAverageAssignment(studentData, assignment) {
        let average = 0;
        let items = 0;
        studentData.forEach(item => {
            if (item.assignment === assignment) {
                average += ((item.difficult + item.fun) / 2)
                items++;
            }
        })
        return /*Math.round(*/average / items/*)*/
    }

    calculateAverageForOneStudent(studentData) {
        const averageData = studentData.map(studentItem => {
            const average = ((studentItem.difficult + studentItem.fun) / 2)
            return {
                id: studentItem.id,
                name: studentItem.name,
                assignment: studentItem.assignment,
                average: average,
            }
        })
        return averageData
    }

    render() {
        // console.log('name', this.state.studentName)
        const studentData = this.props.studentData.filter(item => {
            return item.name === this.state.studentName
        })
        return (
            <div className="StudentPage">
                <h1>Student: {this.state.studentName}</h1>
                <ChartComponent
                    studentData={studentData}
                />
                <GraphComponent
                    studentData={studentData}
                />
            </div>
        )
    }
}

export default StudentPage;