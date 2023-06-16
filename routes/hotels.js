import express from "express";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// create hotels
router.post('/', verifyAdmin , createHotel);

// get all hotels
router.get('/', getHotels);

// get single hotel by id
router.get('/:id', getHotel);

// update hotel
router.put('/:id', verifyAdmin , updateHotel);

// delete hotel
router.delete('/:id', verifyAdmin , deleteHotel);


export default router;