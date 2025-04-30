"use client"
import { Job } from "@/types/jobs";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../../_components/Card";

const JobInfo = () => {
  const params = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`https://remotive.com/api/remote-jobs?search=${params.title}`);
      setJob(res.data.jobs[0]);
    }
    try {
      fetchJob();
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <div>
      {job && <Card job={job!} />}
    </div>
  )
};

export default JobInfo
