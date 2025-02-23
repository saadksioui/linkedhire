"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";

const JobSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  return (
    <div className="w-2/3 mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-6 flex items-center">
      {/* Job Search Input */}
      <div className="flex items-center gap-2 flex-1 border-r border-gray-300 px-4">
        <Search className="text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none focus:ring-0 bg-transparent text-gray-700 dark:text-white"
        />
      </div>

      {/* Location Filter */}
      <div className="flex items-center gap-2 flex-1 border-r border-gray-300 px-4">
        <MapPin className="text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-none focus:ring-0 bg-transparent text-gray-700 dark:text-white"
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
