import mongoose from "mongoose";
import bcrypt from "bcrypt";

const JobSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      max: [20, "Job Category can not exit 20 characters."],
    },
    title: {
      type: String,
      max: [20, "Job title can not exit 20 characters."],
    },
    description: {
      type: String,
      max: [30, "User email can not exit 20 characters."],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const jobModel = mongoose.model("Job", JobSchema);
export default jobModel;
