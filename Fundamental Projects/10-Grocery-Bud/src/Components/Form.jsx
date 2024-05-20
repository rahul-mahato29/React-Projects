import { useState } from "react"

const Form = ({addItem}) => {
    const [inputVal, setInputVal] = useState("");

    function handleSubmit(e) {
        e.preventDefault();         //helps in preventing from page-refresh
        if(!inputVal) return;

        addItem(inputVal)
        setInputVal('')
    }

    return (
        <form onSubmit={handleSubmit} className="border-2 border-black p-5 m-20 mb-0 text-center">
            <h2 className="text-xl font-semibold m-4">Grocery Bud</h2>
            <div className="m-1">
                <input
                    type="text"
                    className="border-none p-2 bg-gray-200 w-72"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
                <button type="submit" className="bg-blue-300 w-24 p-2">Add Item</button>
            </div>
        </form>
    )
}

export default Form;