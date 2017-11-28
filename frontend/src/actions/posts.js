export const SAVE_POST = 'SAVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

export const savePost = (post) => ({
    type: SAVE_POST,
    post
  })

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
})

