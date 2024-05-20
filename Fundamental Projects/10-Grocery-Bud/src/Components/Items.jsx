import SingleItems from "./SingleItems";

const Items = ({items, removeItem, editItem}) => {
    return (
        <div className="border-2 border-black p-5 ml-20 mr-20">
            {items.map((info) => {
                return <SingleItems key={info.id} {...info} removeItem={removeItem} editItem={editItem}/>
            })}
        </div>
    )
}

export default Items;