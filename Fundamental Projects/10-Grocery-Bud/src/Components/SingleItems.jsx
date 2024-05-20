const SingleItems = ({id, name, removeItem, editItem}) => {
    return (
        <div className="flex justify-around w-64 m-1 border-2">
            <input type="checkbox" name={name} onChange={() => editItem(id)}/>
            <h3 className="pl-10 pr-20 p-1">{name}</h3>
            <button className="bg-red-300 p-1 rounded hover:bg-red-400" onClick={() => {removeItem(id)}}>Delete</button>
        </div>
    )
}

export default SingleItems;