import Project from "@/Model/projectmodel";
import { dbConnect } from "@/Utils/mongo.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  await dbConnect();
  try {
    const project = await Project.find({});
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        data: [],
        status: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    console.log("Request body:", body);

    const project = await Project.create(body);
    return new Response(JSON.stringify({ project }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        data: [],
        status: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

