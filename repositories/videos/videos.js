import video from "../../models/videos.js";

export const getVideosRepo = async () => {
  const data = await video.find();

  return data;
};
