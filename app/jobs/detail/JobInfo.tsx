"use client";

import { Job } from "@/types/jobs";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import JobDetail from "./JobDetail";

const JobInfo = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      if (!name) return;

      setLoading(true);
      try {
        const res = await axios.get(`https://remotive.com/api/remote-jobs?search=${name}`);
        setJob(res.data.jobs[0]);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [name]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          Error
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">{error}</p>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
        </button>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Job not found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          The job you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="bg-blue-700 py-8 dark:bg-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to search results
          </button>
        </div>
      </div>

      <div className="py-8 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          {job && <JobDetail job={job} />}
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
