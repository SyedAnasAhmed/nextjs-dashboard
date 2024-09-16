import Project from "@/Model/projectmodel";
import { dbConnect } from "@/Utils/mongo.js";

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    const project = await Project.findByIdAndUpdate(id, body, { new: true });
    console.log(body);

    if (!project) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const deleteProject = await Project.findByIdAndDelete(id);

    if (!deleteProject) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
      });
    }

    return new Response({ message: "deleted sucessfully" });
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
}
