import { Suspense } from "react";
import JobInfo from "./JobInfo";

const page = () => {
  return (
    <Suspense fallback={<p className="text-center py-20">Loading job detail...</p>}>
      <JobInfo />
    </Suspense>
  )
};

export default page
