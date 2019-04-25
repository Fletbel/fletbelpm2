module.exports = function (index, author, data, time) {
  const post = {
    index: "number",
    author: "string",
    data: "string",
    time: "string"
  }
  post.index = index;
  post.author = author;
  post.data = data;
  post.time = time;
  return {
    post() {
      console.log(post);
      return post;
    }
  }
};