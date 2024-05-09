import { useState } from "react";

const Tour = ({id, name, info, price, image, removeTour }) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <article className="border-2 border-black p-1 m-1 w-64 text-center">
            <div>
                <img className="w-64 h-48" src={image} alt={name} />
                <span>{price}</span>
            </div>
            <div>
                <h5>{name}</h5>
                <p className="text-left">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="text-blue-700 font-semibold" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'show more'}
                    </button>
                </p>
                <button className="bg-green-200 hover:bg-green-400 p-1 rounded-md mt-2" onClick={()=>{removeTour(id)}}>Not Interested</button>
            </div>
        </article>
    )
}

export default Tour;