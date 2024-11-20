import express from "express";
import viewAllUsers from "../controllers/users/viewAllUsers";
import profile from "../controllers/users/profile";
import followUser from "../controllers/users/follow";
import unfollowUser from "../controllers/users/unfollow";

const userRouter = express.Router();

userRouter.get("/", viewAllUsers);
userRouter.get("/profile/:id", profile);
userRouter.post("/follow/:id", followUser)
userRouter.post("/unfollow/:id", unfollowUser)


export default userRouter;
