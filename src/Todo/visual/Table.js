import React from 'react';

const Table = ({ data, deleteTask }) => {
    return (
        <div>
            <tr>
                <th>Name</th>
            </tr>

            {data.map(item => {

                return (
                    <React.Fragment>
                        <tr>
                            <td>{item.name}</td>
                            <td>
                                <button 
                                class="btn btn-danger"
                                onClick={() => deleteTask(item.id)}>Delete</button>
                            </td>
                        </tr>
                    </React.Fragment>
                )
            })}

        </div>
    );
};

export default Table;