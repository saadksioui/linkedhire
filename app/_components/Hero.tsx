import { Button } from "@/components/ui/button";
import Card from "./Card";

const Hero = () => {
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
