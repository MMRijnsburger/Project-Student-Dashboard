import React from 'react';
import InputSelect from './InputSelect';

const SelectStudents = (props) => {
    const inputSelects = props.students.map(item => {
        return (
            <InputSelect
                key={item}
                selectName={item}
                selectText={item}
                selectChange={props.studentsChange}
            />
        )
    })
    return (
        <div className="SelectStudents">
            <h2>SelectStudents component</h2>
            <h3>en InputSelect component</h3>
            {inputSelects}
        </div>
    )
}

export default SelectStudents;