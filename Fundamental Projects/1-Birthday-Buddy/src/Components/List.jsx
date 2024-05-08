import PersonList from "./PersonList";

const List = ({ detail }) => {
    return (
        <section>
            {detail.map((info) => {
                return <PersonList key={info.id} {...info} />
            })}
        </section>
    )
}

export default List;