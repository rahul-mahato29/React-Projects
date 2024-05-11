const MenuItem = ({title, img, price, desc}) => {
    return (
        <article className="p-2 m-1 w-80 rounded shadow shadow-gray-600">
            <img className="h-64 w-full" src={img} alt={title} />
            <div className="flex justify-between p-1 m-2">
                <h2 className="text-xl font-semibold capitalize">{title}</h2>
                <span className="bg-yellow-300 p-1 rounded text-sm font-bold text-gray-600">${price}</span>
            </div>
            <p className="p-1 mt-4 mb-4 text-gray-500">{desc}</p>
        </article>
    )
}

export default MenuItem;