import { Category } from "@/types/category";
import JobCategoryItem from "./JobCategoryItem";

const jobCategories: Record<number, Category> = {
  1: {
    name: "Software Development",
    slug: "software-dev",
    icon: "Code",
    color: "bg-indigo-100 text-indigo-800"
  },
  2: {
    name: "Customer Service",
    slug: "customer-support",
    icon: "Headset",
    color: "bg-cyan-100 text-cyan-800"
  },
  3: {
    name: "Design",
    slug: "design",
    icon: "Palette",
    color: "bg-amber-100 text-amber-800"
  },
  4: {
    name: "Marketing",
    slug: "marketing",
    icon: "Megaphone",
    color: "bg-red-100 text-red-800"
  },
  5: {
    name: "Sales / Business",
    slug: "sales-business",
    icon: "Briefcase",
    color: "bg-emerald-100 text-emerald-800"
  },
  6: {
    name: "Product",
    slug: "product",
    icon: "Package",
    color: "bg-purple-100 text-purple-800"
  },
  7: {
    name: "Project Management",
    slug: "project-management",
    icon: "ClipboardList",
    color: "bg-violet-100 text-violet-800"
  },
  8: {
    name: "Data Analysis",
    slug: "data",
    icon: "BarChart3",
    color: "bg-sky-100 text-sky-800"
  },
  9: {
    name: "DevOps / Sysadmin",
    slug: "devops",
    icon: "Server",
    color: "bg-slate-100 text-slate-800"
  },
  10: {
    name: "Finance / Legal",
    slug: "finance-legal",
    icon: "Banknote",
    color: "bg-green-100 text-green-800"
  },
  11: {
    name: "Human Resources",
    slug: "hr",
    icon: "Users",
    color: "bg-pink-100 text-pink-800"
  },
  12: {
    name: "QA",
    slug: "qa",
    icon: "ShieldCheck",
    color: "bg-orange-100 text-orange-800"
  }
};





const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Explore Categories</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Browse job opportunities by category to find the perfect role that matches your skills and interests.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {Object.entries(jobCategories).map(([id, category]) => (
            <JobCategoryItem key={id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
};

export default Categories
