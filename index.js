const mongoose = require("mongoose");
const mongo = require("mongodb").MongoClient;
const assert = require("assert");
const express = require("express");

const url = "mongodb://localhost:27017";
// const app = express();

//mongo DB 셋업
mongo.connect(url, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  // 에러 없을 시 접속 메시지 출력
  else {
    console.log("Succesfully Connected to DB");
  }
});

// const mongoose = require("mongoose");
// const promise = mongoose.connect("mongodb://localhost/mydb", {
//   useMongoClient: true
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   // we're connected!
//   console.log("connected successfully");
// });
// app.get('/', function (req, res) {
//   res.send('T');
// })

// app.use('/', app);

// // client.db 메소드로 DB 선택
// const db = client.db('test');

// // 새 컬렉션 생성
// const collection = db.collection('sample');

// // 컬렉션에 하나 넣기
// collection.insertOne({
//   name: 'sampleSingle'
// }, (err, result) => {});

// // 컬렉션에 여러개 넣기
// collection.insertMany([{
//   name: 'sampleOne'
// }, {
//   name: 'sampleTwo'
// }], (err, result) => {});

// // 모든 문서 찾기
// collection.find().toArray((err, items) => {
//   console.log(items)
// });

// // 문서 하나 찾기
// collection.findOne().toArray((err, items) => {
//   console.log(item)
// });

// // 삭제
// collection.deleteOne({
//   name: 'sampleSingle'
// }, (err, items) => {
//   console.log(item)
// });

// //연결 해제
// client.close();
// // -- Define model
