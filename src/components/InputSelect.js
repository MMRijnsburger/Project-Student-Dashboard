import React from 'react';

const InputSelect = (props) => {
    const handleSelectChange = (event) => {
        // console.log(event.target.checked)
        // console.log(props.selectName)
        props.selectChange(props.selectName, event.target.checked)
    }
    return (
        <label className="InputSelectLabel">
            <input
                type="checkbox"
                onClick={handleSelectChange}
                defaultChecked
            >
            </input>
            {props.selectText}
        </label>
    )
}

export default InputSelect;