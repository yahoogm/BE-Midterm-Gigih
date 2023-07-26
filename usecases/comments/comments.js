import {
  addCommentRepo,
  getCommentsRepo,
} from "../../repositories/comments/comments.js";

export const getCommentsUsecase = async (id) => {
  const comments = await getCommentsRepo(id);

  if (!comments) {
    return null;
  }

  return comments;
};

export const addCommentUsecase = async (video_id, userComment, username) => {
  const comment = await addCommentRepo(video_id, userComment, username);

  if (!comment) {
    return null;
  }

  return comment;
};
