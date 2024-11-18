import { Request, Response } from "express";
import { ServiceResponse } from "../../models/serviceResponse";
import { prisma } from "../../index";
 
const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) {
      res.status(404).json(ServiceResponse.notFound("Post not found"));
      return;
    }

    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json(ServiceResponse.success("Post deleted successfully"));
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(ServiceResponse.failed("Internal server error"));
    return;
  }
};

export default deletePost;