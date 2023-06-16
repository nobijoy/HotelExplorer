import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";

const router = express.Router();

// create 
router.post('/:hotelid', verifyAdmin , createRoom);

// get all 
router.get('/', getRooms);

// get single 
router.get('/:id', getRoom);

// update 
router.put('/:id', verifyAdmin , updateRoom);

// delete 
router.delete('/:id', verifyAdmin , deleteRoom);

 
export default router;