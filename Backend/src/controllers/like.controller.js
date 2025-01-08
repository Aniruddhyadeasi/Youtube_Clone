import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID")
    }

    const existingLike = await Like.findOne({
        video: videoId,
        likedBy: req.user._id
    })

    if (existingLike) {
        // Unlike the video
        await Like.findByIdAndDelete(existingLike._id)
        
        return res
            .status(200)
            .json(new ApiResponse(200, {liked: false}, "Video unliked successfully"))
    }

    // Like the video
    await Like.create({
        video: videoId,
        likedBy: req.user._id
    })

    return res
        .status(200)
        .json(new ApiResponse(200, {liked: true}, "Video liked successfully"))
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params

    if (!isValidObjectId(commentId)) {
        throw new ApiError(400, "Invalid comment ID")
    }

    const existingLike = await Like.findOne({
        comment: commentId,
        likedBy: req.user._id
    })

    if (existingLike) {
        // Unlike the comment
        await Like.findByIdAndDelete(existingLike._id)
        
        return res
            .status(200)
            .json(new ApiResponse(200, {liked: false}, "Comment unliked successfully"))
    }

    // Like the comment
    await Like.create({
        comment: commentId,
        likedBy: req.user._id
    })

    return res
        .status(200)
        .json(new ApiResponse(200, {liked: true}, "Comment liked successfully"))
})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params

    if (!isValidObjectId(tweetId)) {
        throw new ApiError(400, "Invalid tweet ID")
    }

    const existingLike = await Like.findOne({
        tweet: tweetId,
        likedBy: req.user._id
    })

    if (existingLike) {
        // Unlike the tweet
        await Like.findByIdAndDelete(existingLike._id)
        
        return res
            .status(200)
            .json(new ApiResponse(200, {liked: false}, "Tweet unliked successfully"))
    }

    // Like the tweet
    await Like.create({
        tweet: tweetId,
        likedBy: req.user._id
    })

    return res
        .status(200)
        .json(new ApiResponse(200, {liked: true}, "Tweet liked successfully"))
})

const getLikedVideos = asyncHandler(async (req, res) => {
    const likes = await Like.find({
        likedBy: req.user._id,
        video: { $exists: true }
    })
    .populate({
        path: "video",
        select: "title thumbnail description duration views owner",
        populate: {
            path: "owner",
            select: "username fullName avatar"
        }
    })
    .sort({ createdAt: -1 })

    const likedVideos = likes.map(like => like.video).filter(Boolean) // Remove any null videos

    return res
        .status(200)
        .json(new ApiResponse(
            200, 
            likedVideos,
            "Liked videos fetched successfully"
        ))
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}