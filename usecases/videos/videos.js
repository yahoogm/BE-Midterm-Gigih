import { getVideosRepo } from "../../repositories/videos/videos.js";

export const getVideosUsecase = async () => {
  const videos = await getVideosRepo();

  if (!videos) {
    return null;
  }

  return videos;
};
