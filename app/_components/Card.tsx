import Image from "next/image";

const Card = () => {
  return (
    <div className="p-4 flex flex-col items-start hover:shadow rounded-md cursor-pointer">
      <Image src="/facebook.png" alt="Facebook" width={100} height={24} className="size-12 rounded-full object-fit"/>
      <p className="text-gray-500 text-sm mt-5">1 day ago - Part Time</p>
      <h1 className="mt-2 text-2xl font-semibold">Senior Software Engineer</h1>
      <p className="text-gray-500 text-sm mt-2">Facebook</p>
      <p className="text-blue-500 text-sm mt-5 font-semibold">San Francisco, CA</p>
    </div>
  )
};

export default Card
