import * as actions from '../actions/posts'
import idGenerator from '../utils/idGenerator'

const initialState = {
  posts: [
    {
      id: '123',
      timestamp: Date.now(),
      title: 'First Post! LOL!',
      body: 'First Post! LOL!',
      author: 'David Stiennon',
      category: 'cheese',
      voteScore: 2,
      deleted: false
    },
    {
      id: '123',
      timestamp: Date.now(),
      title: 'Star Wars',
      body: 'Miscellaneous ramblings about Star Wars fan theories',
      author: 'David Stiennon',
      category: 'cheese',
      voteScore: 3,
      deleted: false
    },
    {
      id: '123',
      timestamp: Date.now(),
      title: 'My favorite cheeses',
      body: 'Cheddar, Gouda, and many others',
      author: 'David Stiennon',
      category: 'cheese',
      voteScore: 15,
      deleted: false
    }
  ]
};


const reducer = (state = initialState, action) =>{
  const {posts} = state
  switch(action.type){
    case actions.SAVE_POST:
      const {post} = action;
      const newPosts = [...posts.filter(p => p.id !== action.post.id ), post ]
      return {
        ...state,
        posts: newPosts
      }
    case actions.REMOVE_POST:
      return {
        ...state,
        posts: posts.filter(post => post.id !== action.postId)
      }
    default:
      return state;

  }
};

export default reducer;