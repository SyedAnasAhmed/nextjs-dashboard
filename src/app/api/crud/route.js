import Project from "@/Model/projectmodel";
import { dbConnect } from "@/Utils/mongo.js";

export async function GET(request, response) {
  dbConnect();
  try {
    const project = await Project.find({});
    response.status(200).json(project);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
}

export async function POST(request, response) {
  try {
    const project = await Project.create(request.body);
    response.status(200).json(project);

    console.log(request.body);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
    console.log(error.message);
  }
}

export async function PUT(request, response) {
  try {
    const { id } = request.params;
    const project = await Project.findByIdAndUpdate(id, request.body);

    if (!project) {
      return response.status(404).json({ message: "product not found" });
    }

    const updatedProject = await Project.findById(id);
    response.status(200).json(updatedProject);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
}

export async function DELETE(request, response) {
  try {
    const { id } = request.params;
    const deleteProject = await Project.findByIdAndDelete(id);

    if (!deleteProject) {
      return response.status(404).json({ message: "Product not found" });
    }

    response.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
}
