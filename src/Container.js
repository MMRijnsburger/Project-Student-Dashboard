import React from 'react';
import ChartComponent from './components/ChartComponent';
import SelectStudents from './components/SelectStudents';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="Container">
                <h1>Home</h1>
                <ChartComponent />
                <SelectStudents />
            </div>
        )
    }
}

export default Container;