import MenuItem from "./MenuItem";

const Menu = ({menuItem}) => {
    return (
        <section className="flex flex-wrap justify-around mt-5">
            {menuItem.map((info) => {
                return <MenuItem key={info.id} {...info} />
            })}
        </section>
    )
}

export default Menu;