import { Job } from "@/types/jobs";
import Image from "next/image";

const Card = ({ job }: { job: Job }) => {
  return (
    <div className="p-4 flex flex-col items-start hover:shadow rounded-md cursor-pointer">
      <Image src={job.companyLogo} alt="Facebook" width={100} height={24} className="size-12 rounded-full object-fit" />
      <p className="text-gray-500 text-sm mt-5">{job.created_at} - {job.remote[0]}</p>
      <h1 className="mt-2 text-2xl font-semibold">{job.title}</h1>
      <p className="text-gray-500 text-sm mt-2">{job.company_name}</p>
      <p className="text-blue-500 text-sm mt-5 font-semibold">{job.location}</p>
    </div>
  )
};

export default Card
