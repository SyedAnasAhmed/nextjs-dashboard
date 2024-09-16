import mongoose, { model, models, Schema } from "mongoose";

const projectschema = new Schema(
  {
    heading: {
      type: String,
      required: true,
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

// const Project = mongoose.model("Project", projectschema);
export default models.Project || model("Project", projectschema)
