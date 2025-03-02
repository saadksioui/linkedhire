"use client";

import { Button } from "@/components/ui/button";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [visibleJobs, setVisibleJobs] = useState(9);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response =  await axios.get("/api/jobs"); // Fetch more jobs
        setJobs(response.data || []); // Ensure jobs is an array
      } catch (error) {
        console.error("Error fetching jobs:", error);
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
      {loading ? (
        <p className="text-center text-gray-600">Loading jobs...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.slice(0, visibleJobs).map((job, index) => (
              <Card key={index} job={job} />
            ))}
          </div>

          {/* Show More Button */}
          {visibleJobs < jobs.length && (
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
