import express from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=> {
//     res.send("hello user you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next)=> {
//     res.send("hello user you are logged in and you can delete this account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=> {
//     res.send("hello admin you are logged in and you can delete this account");
// });

// get all users
router.get('/',verifyAdmin, getUsers);

// get single user 
router.get('/:id', verifyUser, getUser);

// update user
router.put('/:id', verifyUser, updateUser);

// delete users
router.delete('/:id',verifyUser, deleteUser);


export default router;