import React from 'react';
import ChartComponent from './components/ChartComponent';

class StudentPage extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="StudentPage">
                <h1>Students</h1>
                <ChartComponent />
            </div>
        )
    }
}

export default StudentPage;