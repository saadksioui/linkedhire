import { Job } from "@/types/jobs";
import moment from "moment";
import Image from "next/image";

const Card = ({ job }: { job: Job }) => {
  return (
    <div className="p-4 flex flex-col items-start hover:shadow rounded-md cursor-pointer">
      <Image src={job.companyLogo} alt="Facebook" width={100} height={24} className="size-12 rounded-full object-fit" />
      <p className="text-gray-500 text-sm mt-5">{moment(job.created_at).fromNow()} - {job.jobType}</p>
      <h1 className="mt-2 text-2xl font-semibold">{job.jobTitle}</h1>
      <p className="text-gray-500 text-sm mt-2">{job.companyName}</p>
      <p className="text-blue-500 text-sm mt-5 font-semibold">{job.jobGeo}</p>
    </div>
  )
};

export default Card
