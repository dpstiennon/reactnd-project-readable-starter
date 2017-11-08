import idGenerator from '../utils/idGenerator'

export default class Post {
  constructor(author, title, body, category, id = idGenerator(), timeStamp = Date.now(), voteScore = 0, deleted = false){
    Object.assign(this, arguments);
  };
}


