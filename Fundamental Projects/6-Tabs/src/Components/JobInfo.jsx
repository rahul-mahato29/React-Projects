const JobInfo = ({job, jobIndex}) => {

    const {title, company, dates, duties} = job[jobIndex]

    return (
        <section className="border-2 border-black p-1 m-1 grow">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <span>{dates}</span>
            <div className="border-2 border-black">
                {duties.map((info) => {
                    return <div className="flex"><span className="p-1">⏩</span><span className="p-1">{info}</span></div>
                })}
            </div>
        </section>
    )
}

export default JobInfo;