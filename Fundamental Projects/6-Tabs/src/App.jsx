import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Components/Loading";
import Company from "./Components/Company";
import JobInfo from "./Components/JobInfo";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {

  const [loading, setLoading] = useState(true)
  const [job, setJob] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  async function fetchData() {

    try {
      const data = await fetch(url).then((response) => response.json());
      setJob(data);
      setLoading(false)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }


  return (
    <main className="border-2 border-black p-20 flex">
      <Company job={job} setJobIndex={setJobIndex} />
      <JobInfo job={job} jobIndex={jobIndex} />
    </main>
  )
};


export default App;
