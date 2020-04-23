import React from 'react';

class InputSelect extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    handleSelectChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <input
                type="checkbox"
                onChange={this.handleSelectChange}
            ></input>
        )
    }
}

export default InputSelect;