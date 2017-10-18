export const SAVE_POST = 'SAVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const savePost = (post) => ({
    type: SAVE_POST,
    post
  });

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});
