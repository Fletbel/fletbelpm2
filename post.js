const mongoose = require('mongoose');

const post = new post({
  index: 1,
  subject: "Welcome",
  data: "Hello World",
  author: "admin"
});

post.save(function (err, book) {
  if (err) return console.log(err); //에러시 메시지출력
  console.dir(post);
});

const Schema = mongoose.schema;
const boardSchema = new Schema({
  index: Number,
  subject: String,
  data: String,
  author: String,
  published_date: {
    type: Date,
    default: Date.now
  }
});


function handlePost(subject, data) {
  if (!validSubject) {
    console.log("subject error");
    return 0;
  } else if (!validData) {
    console.log("data error");
    return 0;
  } else {
    console.log(`${subject.value}`);
    console.log(`${data.value}`);
    return 1;
  }
}

function validData(data) {
  return (typeof data === "string");
}

function validSubject(subject) {
  if (typeof subject === "string")
    return 1;
  else {
    console.log("post subject error message");
    return 0;
  }
}

module.exports = mongoose.model('post', boardSchema);




// module.exports = function (index, author, data, time) {
//   const post = {
//     index: "number",
//     author: "string",
//     data: "string",
//     time: "string"
//   }
//   post.index = index;
//   post.author = author;
//   post.data = data;
//   post.time = time;

//   return post;
// };