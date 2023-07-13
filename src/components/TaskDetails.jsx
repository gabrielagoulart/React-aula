import React from 'react';
import { useParams } from 'react-router-dom'

import Button from './Button'

const TaskDetails = () => {

    const params = useParams()
    console.log(params)

    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis doloribus porro obcaecati accusantium voluptatum exercitationem natus officia autem sequi, error placeat aliquam assumenda earum beatae temporibus at nam, minus qui.</p>
            </div>
        </>

    )
}

export default TaskDetails;