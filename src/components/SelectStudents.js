import React from 'react';
import InputSelect from './InputSelect';

class SelectStudents extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="SelectStudents">
                <h2>SelectStudents component</h2>
                <h3>en InputSelect component</h3>
                <label>
                    <InputSelect /> Student naam 1
                </label><br />
                <label>
                    <InputSelect /> Student naam 2
                </label><br />
                <label>
                    <InputSelect /> Student naam 3
                </label><br />
                <label>
                    <InputSelect /> Student naam 4
                </label><br />
            </div>
        )
    }
}

export default SelectStudents;