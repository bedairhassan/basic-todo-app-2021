const deleteTaskById = (array,id)=>{

    return array.filter(task=>task[`id`]!==id)
}

export default deleteTaskById