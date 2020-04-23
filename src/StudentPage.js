import React from 'react';
import ChartComponent from './components/ChartComponent';

class StudentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: props.match.params.name
        }
    }

    render() {
        // console.log('name', this.state.studentName)
        const studentData = this.props.studentData.filter(item => {
            return item.name === this.state.studentName
        })
        return (
            <div className="StudentPage">
                <h1>Students</h1>
                <ChartComponent
                    studentData={studentData}
                />
            </div>
        )
    }
}

export default StudentPage;