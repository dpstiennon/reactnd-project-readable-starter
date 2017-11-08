export const SAVE_POST = 'SAVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const savePost = (post) => ({
    type: SAVE_POST,
    post
  });

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});
