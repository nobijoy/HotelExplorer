import express from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


router.get("/checkauthentication", verifyToken, (req, res, next)=> {
    res.send("hello user you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next)=> {
    res.send("hello user you are logged in and you can delete this account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=> {
    res.send("hello admin you are logged in and you can delete this account");
});

router.get('/', getUsers);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


export default router;