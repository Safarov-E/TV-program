import React from 'react';

const ProgramListItem = (props) => {
    const {title, currentProgress, curretTime, startProgram} = props;
    return (
        <li>
            <div className="program__list-link">
                <span>{startProgram}</span>
                <p>{title}</p>
            </div>
            {curretTime ? 
            <div className="program__list-item-progress">
                <div className="program__list-item-progress-bar" style={{width: `${currentProgress}%`}}></div>
            </div>
            : null}
        </li>
    )
}

export default ProgramListItem;