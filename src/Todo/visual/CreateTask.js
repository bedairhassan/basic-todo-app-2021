import React from 'react';
import { useState } from 'react/cjs/react.development';

import Id from '../functions/Id'

const CreateTask = ({ CreateTaskk }) => {

    const [task, taskSet] = useState({})

    return (
        <div>
            <tr>
                <td>
                    <input onChange={e => taskSet({
                        name: e.target.value,
                        id: Id()
                    })} />
                </td>
                <td>
                    <button
                        class="btn btn-primary" onClick={() => CreateTaskk(task)}>Create</button>
                </td>
            </tr>
        </div>
    );
};

export default CreateTask;