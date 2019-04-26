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

function handlePost(subject, data) {
  console.log(subject);
  console.log(data.value);
  if (validSubject) {
    console.log("subject error");
    return 0;
  } else if (validData) {
    console.log("password error");
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