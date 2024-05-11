
const Company = ({job, setJobIndex}) => {
    return (
        <section className="border-2 border-black p-2 m-1 grow-0 w-64 flex flex-col gap-2">
            {job.map((info, index) => {
                return (
                    <button 
                    onClick={() => {setJobIndex(index)}}
                    className="border-2 border-black p-2" 
                    key={info.id} 
                    >
                        {info.company}
                    </button>
                )
            })}
        </section>
    )
}

export default Company;