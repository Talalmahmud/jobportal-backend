import Category from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const newCategory = Category.create(req.body);
    return res.status(200).json({ newCategory });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Internal server error", error: error });
  }
};

export const viewAllCategory = async (req, res) => {
  try {
    const categories = Job.find({});

    return res.status(200).json({
      data: categories,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

export const editCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await Category.findOneAndUpdate(categoryId, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update against the schema
    });
    return res.status(200).json({
      mesage: "Update is succeed",
      data: category,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

// export const viewJobById = async (req, res) => {
//   try {
//     const jobId = req.params.id;

//     const job = await Job.findById(jobId);
//     return res.status(200).json({
//       data: job,
//     });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Internal server error", error: error });
//   }
// };

// export const deleteJob = async (req, res) => {
//   try {
//     const jobId = req.params.id;

//     const job = await Job.findByIdAndDelete(jobId);
//     return res.status(200).json({
//       message: "Job delete is success",
//       data: job,
//     });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Internal server error", error: error });
//   }
// };
