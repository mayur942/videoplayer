// console.log("Hi")

let selectedVideo = JSON.parse(localStorage.getItem("selectedVideo"));
console.log(selectedVideo.src)
// console.log(selectedVideo)

let selVideo = document.querySelector("video");
console.log(selVideo)
selVideo.src=selectedVideo.vidsrc;

let SelectTitle = document.querySelector('.SelectTitle')
let SelectCreator = document.querySelector('.SelectCreator')
SelectTitle.innerText = selectedVideo.title;
SelectCreator.innerText = selectedVideo.creator;