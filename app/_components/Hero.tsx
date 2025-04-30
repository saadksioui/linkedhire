"use client";

import { Button } from "@/components/ui/button";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Job } from "@/types/jobs";
import { getJobs } from "@/actions/getJobs";

const Hero = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const JobsResponse = await getJobs();
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
    <div className="w-2/3 mx-auto mt-20">
      {loading && <p className="text-center text-gray-600">Loading jobs...</p>}

      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          {jobs.length === 0 ? (
            <p className="text-center text-gray-600 text-lg font-semibold">
              No jobs available at the moment. Please check back later!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job, index) => (
                <Card key={index} job={job} />
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
  );
};

export default Hero;
