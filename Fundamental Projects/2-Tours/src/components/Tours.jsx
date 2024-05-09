import Tour from "./Tour";

const Tours = ({tour, removeTour}) => {
    return (
        <section className="flex flex-wrap justify-around p-10">
            {tour.map((info) => {
                return <Tour key={info.id} {...info} removeTour={removeTour}/>
            })}
        </section>
    )
}

export default Tours;