import { connectToDB } from "@/config/db";
import { Job } from "@/models/job";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const jobs = await Job.find();

    if (jobs.length === 0) {
      return NextResponse.json({ message: "No jobs available" }, { status: 200 });
    }

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json()


    if (!body.jobTitle || !body.companyName || !body.url) {
      return NextResponse.json(
        { error: "Missing required fields: jobTitle, companyName, and url" },
        { status: 400 }
      );
    }

    const newJob = new Job(body);
    await newJob.save();

    return NextResponse.json(
      { message: "Job added successfully", job: newJob },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding job:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
