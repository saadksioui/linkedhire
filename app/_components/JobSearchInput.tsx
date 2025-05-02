"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";



const JobSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-1/3 mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-6 flex items-center">
      {/* Job Search Input */}
      <div className="flex items-center gap-2 flex-1 border-r border-gray-300 px-4">
        <Search className="text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Job title or keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none outline-none bg-transparent text-gray-700 dark:text-white shadow-none"
        />
      </div>

      {/* Full-Time Toggle & Search Button */}
      <div className="px-4">
        <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Search
        </Button>
      </div>
    </div>
  )
};

export default JobSearchInput
