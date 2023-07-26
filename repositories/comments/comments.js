import comment from "../../models/comments.js";

export const getCommentsRepo = async (id) => {
  const data = await comment.find({ video_id: id });

  return data;
};

export const addCommentRepo = async (video_id, userComment, username) => {
  if (!username) {
    throw Error("Username is not valid!");
  }

  const comments = new comment({
    video_id,
    comment: userComment,
    username,
  });

  try {
    const commentToSave = comments.save();
    return commentToSave;
  } catch (error) {
    return error;
  }
};
