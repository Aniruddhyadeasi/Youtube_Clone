import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getChannelStats = asyncHandler(async (req, res) => {
    const { userId } = req.user; // Assuming logged-in user's ID represents the channel owner

    if (!mongoose.isValidObjectId(userId)) {
        throw new ApiError(400, "Invalid user ID");
    }

    // Fetch channel stats
    const totalVideos = await Video.countDocuments({ owner: userId });
    const totalViews = await Video.aggregate([
        { $match: { owner: new mongoose.Types.ObjectId(userId) } },
        { $group: { _id: null, totalViews: { $sum: "$views" } } },
    ]);
    const totalSubscribers = await Subscription.countDocuments({ channel: userId });
    const totalLikes = await Like.countDocuments({ channelId: userId });

    const stats = {
        totalVideos,
        totalViews: totalViews[0]?.totalViews || 0,
        totalSubscribers,
        totalLikes,
    };

    return res
        .status(200)
        .json(new ApiResponse(200, stats, "Channel stats fetched successfully"));
});

const getChannelVideos = asyncHandler(async (req, res) => {
    const { userId } = req.user; // Assuming logged-in user's ID represents the channel owner
    const { page = 1, limit = 10 } = req.query;

    if (!mongoose.isValidObjectId(userId)) {
        throw new ApiError(400, "Invalid user ID");
    }

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const videos = await Video.find({ owner: userId })
        .sort({ createdAt: -1 }) // Sort by latest videos first
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber)
        .populate("owner", "username avatar fullName");

    return res
        .status(200)
        .json(new ApiResponse(200, videos, "Channel videos fetched successfully"));
});

export {
    getChannelStats,
    getChannelVideos,
};
