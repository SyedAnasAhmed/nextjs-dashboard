import mongoose from "mongoose";

const projectschema = mongoose.schema(
  {
    heading: {
      type: String,
      required: [true, "Please enter prod name"],
    },

    status: {
      type: String,
      required: true,
      default: 0,
    },

    milestone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectschema);
export default Project;
