import Job from "../models/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const newJob = Job.create(req.body);
    return res.status(200).json({ newJob });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Internal server error", error: error });
  }
};

export const viewAllJob = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 users per page

    // Calculate how many documents to skip
    const skip = (page - 1) * limit;
    const jobs = Job.find({}).skip(skip).limit(limit);

    // Get the total count of users
    const totalJob = await Job.countDocuments({});

    // Calculate total pages based on the total count and limit
    const totalPages = Math.ceil(totalJob / limit);
    return res.status(200).json({
      data: jobs,
      currentPage: page,
      totalPages: totalPages,
      totalJobs: totalJob,
      usersPerPage: limit,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

export const editJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findOneAndUpdate(jobId, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update against the schema
    });
    return res.status(200).json({
      mesage: "Update is succeed",
      data: job,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

export const viewJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);
    return res.status(200).json({
      data: job,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findByIdAndDelete(jobId);
    return res.status(200).json({
      message: "Job delete is success",
      data: job,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};
