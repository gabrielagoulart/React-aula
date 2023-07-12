import React from 'react';

import Button from './Button'

const TaskDetails = () => {
    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>

            <div className="task-details-container">
                <p></p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis doloribus porro obcaecati accusantium voluptatum exercitationem natus officia autem sequi, error placeat aliquam assumenda earum beatae temporibus at nam, minus qui.</p>
            </div>
        </>

    )
}

export default TaskDetails;