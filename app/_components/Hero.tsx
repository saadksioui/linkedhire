"use client"
import { Button } from "@/components/ui/button";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [visibleJobs, setVisibleJobs] = useState(9);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    setLoading(true);
    try {
      const response = axios.get(process.env.NEXT_PUBLIC_API_URL + `/jobs?limit=${visibleJobs}`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY
        }
      });

      setJobs(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }


  return (
    <div className="w-2/3 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full flex justify-center my-5">
        <Button className="w-fit mt-7 bg-blue-600 hover:bg-blue-700">Show More</Button>
      </div>
    </div>
  )
};

export default Hero
