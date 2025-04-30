export type Job = {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  tags: string[];
  job_type: "full_time" | "part_time" | "contract" | "internship" | "temporary"; // Add more job types if necessary
  publication_date: string; // ISO 8601 formatted date string
  candidate_required_location: string;
  salary: string;
  description: string;
  company_logo_url: string;
};

