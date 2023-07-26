import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  video_id: {
    require: true,
    type: String,
  },

  username: {
    require: true,
    type: String,
  },

  comment: {
    require: true,
    type: String,
  },

  timestamp: {
    require: true,
    type: Date,
    default: new Date(),
  },
});

const comment = mongoose.model("comments", commentsSchema);

export default comment;
