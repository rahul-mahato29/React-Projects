import SingleQuestion from "./SingleQuestion";

const Question = ({question}) => {
    return (
        <section className='border-2 border-black mx-auto my-12 bg-white rounded-lg p-5 max-w-screen-md shadow-md'>
            <div className='text-center text-xl font-bold'>Question</div>
            {question.map((info) => {
                return <SingleQuestion key={info.id} {...info} />
            })}
        </section>
    )
}

export default Question;