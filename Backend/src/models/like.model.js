import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

// Ensure only one field (video, comment, or tweet) is set
likeSchema.pre('save', function(next) {
    const fields = [this.video, this.comment, this.tweet].filter(Boolean);
    if (fields.length !== 1) {
        next(new Error('Exactly one of video, comment, or tweet must be provided'));
    }
    next();
});

// Compound indexes for faster queries and ensuring unique likes
likeSchema.index({ video: 1, likedBy: 1 }, { unique: true, sparse: true });
likeSchema.index({ comment: 1, likedBy: 1 }, { unique: true, sparse: true });
likeSchema.index({ tweet: 1, likedBy: 1 }, { unique: true, sparse: true });

export const Like = mongoose.model("Like", likeSchema);

