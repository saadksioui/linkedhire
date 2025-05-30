import { Job } from "@/types/jobs";
import { Briefcase, Building, Calendar, DollarSign, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from 'dompurify';

interface JobDetailProps {
  job: Job;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  const {
    title,
    url,
    company_name,
    company_logo,
    tags,
    category,
    candidate_required_location,
    job_type,
    salary,
    publication_date,
    description,
  } = job;

  const cleanHTML = DOMPurify.sanitize(description);



  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-soft p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{title}</h1>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center text-neutral-600 dark:text-neutral-300">
                <Building className="h-4 w-4 mr-1 text-neutral-500 dark:text-neutral-400" />
                <span>{company_name}</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-300">
                <MapPin className="h-4 w-4 mr-1 text-neutral-500 dark:text-neutral-400" />
                <span>{candidate_required_location}</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-300">
                <DollarSign className="h-4 w-4 mr-1 text-neutral-500 dark:text-neutral-400" />
                <span>{salary}</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-300">
                <Calendar className="h-4 w-4 mr-1 text-neutral-500 dark:text-neutral-400" />
                <span>Posted {moment(publication_date).fromNow()}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-sm mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Job Description</h2>
            <div className="text-neutral-700 leading-relaxed">
              <div
                className="prose prose-slate max-w-none dark:text-white"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanHTML) }}
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700 md:hidden">
            <Link
              href={url}
              target="_blank"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors font-medium flex items-center justify-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-soft p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={company_logo}
                alt={company_name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">{company_name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{category}</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start text-sm">
              <MapPin className="h-5 w-5 text-neutral-500 dark:text-neutral-400 mr-3 mt-0.5" />
              <span className="text-neutral-700 dark:text-neutral-300">{candidate_required_location}</span>
            </div>

            <div className="flex items-start text-sm">
              <Briefcase className="h-5 w-5 text-neutral-500 dark:text-neutral-400 mr-3 mt-0.5" />
              <span className="text-neutral-700 dark:text-neutral-300">
                {job_type.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-soft p-6 hidden md:block">
          <Link
            href={url}
            target="_blank"
            className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors font-medium flex items-center justify-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
};

export default JobDetail
