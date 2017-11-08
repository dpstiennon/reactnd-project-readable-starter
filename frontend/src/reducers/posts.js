import * as actions from '../actions/posts'
import idGenerator from '../utils/idGenerator'

const posts = [
  {
    id: '123',
    timestamp: Date.now(),
    title: '',
    body: 'First Post! LOL!',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 2,
    deleted: false
  },
  {
    id: '123',
    timestamp: Date.now(),
    title: '',
    body: 'Star wars fandom',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  },
  {
    id: '123',
    timestamp: Date.now(),
    title: '',
    body: 'Cheddar, Gouda, and many others',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 15,
    deleted: false
  }
];


const reducer = (state = posts, action) =>{
  switch(action.type){
    case actions.SAVE_POST:
      const {post} = action;
      post.id = post.id || idGenerator();
      return state.filter(post => post.id !== action.postId ).push(post);
    case actions.REMOVE_POST:
      return state.filter(post => post.id !== action.postId );
    default:
      return state;

  }
};

export default reducer;