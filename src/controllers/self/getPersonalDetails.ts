import { Request, Response } from "express";
import { prisma } from "../../index";
import { ServiceResponse } from "../../models/serviceResponse";

const getPersonalDetails = async (req: Request, res: Response) => {
  const { userid } = req.body.user;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userid },
    });

    if (!user) {
      res.status(404).json(ServiceResponse.notFound("User not found"));
      return;
    }

    res.status(200).json(ServiceResponse.success("User found", user));
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(ServiceResponse.failed("Internal server error"));
    return;
  }
};

export default getPersonalDetails;