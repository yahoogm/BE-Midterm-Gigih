import { getVideosUsecase } from "../usecases/videos/videos.js";

export const getVideos = async (req, res) => {
  const videos = await getVideosUsecase();

  if (videos.length === 0) {
    return res.status(404).json({
      message: "Videos not found!",
    });
  }

  res.status(200).json({
    data: videos,
  });
};
