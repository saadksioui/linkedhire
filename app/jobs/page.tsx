"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Job } from "@/types/jobs";
import { getJobs } from "@/actions/getJobs";
import Link from "next/link";
import Card from "../_components/Card";
import { Briefcase } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Jobs = () => {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  console.log(category);


  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const JobsResponse = await getJobs(category!);
        setJobs(JobsResponse.data.jobs);
        console.log(JobsResponse.data.jobs);

      } catch (err: any) {
        console.error(err); // Log the error for debugging
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  return (
    <div className="mt-20">
      <div className="bg-blue-700 py-12 w-full mb-10">
        <div className="px-4 md:px-6 w-2/3 mx-auto ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-white">Browse Jobs</h1>
              <p className="text-blue-100">
                Find the perfect role that matches your skills and career goals
              </p>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 px-4 text-white">
              <Briefcase className="h-5 w-5 mr-2 text-blue-200" />
              <span>{jobs.length} jobs available</span>
            </div>
          </div>
        </div>
      </div>
      {loading && <p className="text-center text-gray-600">Loading jobs...</p>}

      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          {jobs.length === 0 ? (
            <p className="text-center text-gray-600 text-lg font-semibold">
              No jobs available at the moment. Please check back later!
            </p>
          ) : (
            <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job, index) => (
                <Link href={`/jobs/${job.title}`} key={index}>
                  <Card job={job} />
                </Link>
              ))}
            </div>
          )}

          <div className="w-full flex justify-center my-5">
            <Button
              className="w-fit mt-7 bg-blue-600 hover:bg-blue-700"
              aria-label="Show more jobs"
            >
              Show More
            </Button>
          </div>
        </>
      )}
    </div>
  )
};

export default Jobs
