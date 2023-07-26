import {
  addCommentUsecase,
  getCommentsUsecase,
} from "../usecases/comments/comments.js";

export const getComments = async (req, res) => {
  const { id } = req.query;
  const comments = await getCommentsUsecase(id);

  if (comments.length === 0) {
    return res.status(404).json({
      message: "Comments not found!",
    });
  }

  res.status(200).json({
    data: comments,
  });
};

export const addComment = async (req, res) => {
  const { video_id, userComment, username } = req.body;

  try {
    const comment = await addCommentUsecase(video_id, userComment, username);

    if (!video_id) {
      return res
        .status(400)
        .json({ message: "video id, comment, username is required!" });
    }

    res.status(201).json({ data: comment, message: "Success create comment" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
