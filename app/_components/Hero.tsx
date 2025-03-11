"use client";

import { Button } from "@/components/ui/button";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Job } from "@/types/jobs";


const Hero = () => {
  const [visibleJobs, setVisibleJobs] = useState(9);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("/api/jobs");
        const jobList = response.data || []; // Ensure jobs is an array
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs. Please try again.");
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  // Show more jobs
  const handleShowMore = () => {
    setVisibleJobs((prev) => prev + 9);
  };

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
              {jobs.slice(0, visibleJobs).map((job) => (
                <Card key={job._id} job={job} />
              ))}
            </div>
          )}

          {/* Show More Button */}
          {visibleJobs < jobs.length && jobs.length > 0 && (
            <div className="w-full flex justify-center my-5">
              <Button
                onClick={handleShowMore}
                className="w-fit mt-7 bg-blue-600 hover:bg-blue-700"
              >
                Show More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
