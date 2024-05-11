const Category = ({ category, filterMenu }) => {
    return (
        <div className="border-2 border-black p-1 text-center">
            {category.map((menu) => {
                return (
                    <button 
                    type="button" 
                    key={menu} 
                    className="bg-orange-300 hover:bg-orange-400 rounded-md p-2 pr-3 pl-3 m-1"
                    onClick={() => {filterMenu(menu)}}
                    >
                        {menu}
                    </button>
                )
            })}
        </div>
    )
}

export default Category;