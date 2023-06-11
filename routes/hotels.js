import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

router.post('/', createHotel);

router.get('/', getHotels);

router.get('/:id',getHotel);

router.put('/:id', updateHotel);

router.delete('/:id', deleteHotel);


export default router;