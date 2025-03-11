import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    companyLogo: { type: String },
    jobGeo: { type: String },
    description: { type: String },
    url: { type: String, required: true },
    jobType: { type: String },
  },
  {
    timestamps: true,
  }
);
export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
