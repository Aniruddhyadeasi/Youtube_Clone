import { Router } from 'express';
import {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
} from "../controllers/video.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

// Apply verifyJWT middleware to all routes
router.use(verifyJWT);

// Public routes (still protected by JWT but no additional checks)
router.route("/")
    .get(getAllVideos)
    .post(
        upload.fields([
            {
                name: "videoFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },
        ]),
        publishAVideo
    );

// Routes requiring videoId
router.route("/:videoId")
    .get(getVideoById)
    .delete(deleteVideo)
    .patch(
        upload.single("thumbnail"),
        updateVideo
    );

// Toggle video publish status
router.route("/toggle/publish/:videoId")
    .patch(togglePublishStatus);

// Additional useful routes

// Get videos by user
router.route("/user/:userId")
    .get((req, res) => {
        // Add userId to query params for filtering
        req.query.userId = req.params.userId;
        return getAllVideos(req, res);
    });

// Search videos
router.route("/search")
    .get((req, res) => {
        // Use the existing getAllVideos with query parameter
        return getAllVideos(req, res);
    });

export default router