import React, { useState } from 'react';

// functions
import Id from './functions/Id'
import deleteTaskById from './functions/deleteTaskById'

// visual
import Table from './visual/Table'
import CreateTask from './visual/CreateTask'

const Main = () => {

    const [data, dataSet] = useState([
    ])


    return (
        <div>
            <table class="table">
                <Table
                    data={data}
                    deleteTask={id => dataSet(deleteTaskById(data, id))} />

                <CreateTask
                    CreateTaskk={task => dataSet([...data, task])} />
            </table>
        </div>
    );
};

export default Main;