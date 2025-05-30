import { Suspense } from "react";
import Jobs from "./Jobs";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <Jobs />
    </Suspense>
  );
}