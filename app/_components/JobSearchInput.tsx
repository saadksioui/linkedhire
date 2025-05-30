"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JobSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const route = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    route.push(`/jobs?search=${searchTerm}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
      {/* Job Search Input */}
      <div className="flex items-center gap-2 flex-1 border-b sm:border-b-0 sm:border-r border-gray-300 px-4">
        <Search className="text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Job title or keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none outline-none bg-transparent text-gray-700 dark:text-white shadow-none"
        />
      </div>

      {/* Search Button */}
      <div className="px-4 sm:px-4">
        <Button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg">
          Search
        </Button>
      </div>
    </form>
  );
};

export default JobSearchInput;
