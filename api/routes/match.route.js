import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMatches,
  getUserProfiles,
  swipeLeft,
  swipeRight,
} from "../controllers/match.controller.js";

const router = express.Router();

router.post("/swipe-right/:likedUserId", protectRoute, swipeRight);
router.post("/swipe-left/:dislikedUserId", protectRoute, swipeLeft);

router.get("/", protectRoute, getMatches);
router.get("/user-profiles", protectRoute, getUserProfiles);

export default router;
