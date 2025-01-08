import { Router } from 'express';
import {
    addVideoToPlaylist,
    createPlaylist,
    deletePlaylist,
    getPlaylistById,
    getUserPlaylists,
    removeVideoFromPlaylist,
    updatePlaylist,
} from "../controllers/playlist.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

// Apply authentication middleware to all routes
router.use(verifyJWT); 

// Create a new playlist
// POST /api/v1/playlists
router.route("/")
    .post(createPlaylist)

// Operations on specific playlist by ID
// GET /api/v1/playlists/:playlistId - Get playlist details
// PATCH /api/v1/playlists/:playlistId - Update playlist
// DELETE /api/v1/playlists/:playlistId - Delete playlist
router.route("/:playlistId")
    .get(getPlaylistById)
    .patch(updatePlaylist)
    .delete(deletePlaylist);

// Add a video to a playlist
// PATCH /api/v1/playlists/add/:videoId/:playlistId
router.route("/add/:videoId/:playlistId")
    .patch(addVideoToPlaylist);

// Remove a video from a playlist
// PATCH /api/v1/playlists/remove/:videoId/:playlistId
router.route("/remove/:videoId/:playlistId")
    .patch(removeVideoFromPlaylist);

// Get all playlists for a specific user
// GET /api/v1/playlists/user/:userId
router.route("/user/:userId")
    .get(getUserPlaylists);

export default router