import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
  image_thumbnail: {
    require: true,
    type: String,
  },
});

const video = mongoose.model("videos", videosSchema);

export default video;
