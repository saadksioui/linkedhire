import { Category } from "@/types/category";
import { iconMap } from "@/utils/iconMap";
import Link from "next/link";


const JobCategoryItem = ({ category }: { category: Category }) => {
  const Icon = iconMap[category.icon];

  return (
    <Link
      key={category.name}
      href={`/jobs?category=${category.name}`}
      className="bg-white border border-neutral-200 rounded-lg p-6 transition-all duration-200 hover:shadow-card hover:border-primary-200 group"
    >
      <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-700 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-neutral-500">
        {Math.floor(Math.random() * 100) + 20} jobs available
      </p>
    </Link>
  );
};

export default JobCategoryItem;
