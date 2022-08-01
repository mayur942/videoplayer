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

let likedVideo = (data)=>{
    let likedVideoDiv = `
                    <div class="likevideos">
                            <div class="likedThumbnail">
                                <img id="likedImg" src="${data.thumbnailsrc}">
                            </div>
                            <div>
                                <p id="likedTitle">${data.title}</p>
                                <p id="likedAuthor">${data.creator}</p>
                            <div class="likedDetails">
                            </div>
                    </div>
                `
let likedList = document.querySelector('.likedList');
likedList.innerHTML += likedVideoDiv;
                         }

let dislikedVideo = (data) =>{
    let dislikedVideoDiv =`
                           <div class="dislikedvideos">
                            <div class="dislikedThumbnail">
                                <img id="dislikedImg" src="${data.thumbnailsrc}">
                            </div>
                            <div>
                                <p id="dislikedTitle">${data.title}</p>
                                <p id="dislikedAuthor">${data.creator}</p>
                            <div class="dislikedDetails">
                            </div>
                    </div>  
                        `
let dislikedList = document.querySelector('.dislikeList');
//    console.log(dislikedList)
    dislikedList.innerHTML += dislikedVideoDiv;
    }

let watchlaterVideo = (data) =>{
    let watchlaterVideoDiv =`
                           <div class="watchlatervideos">
                            <div class="watchlaterThumbnail">
                                <img id="watchlaterImg" src="${data.thumbnailsrc}">
                            </div>
                            <div>
                                <p id="watchlaterTitle">${data.title}</p>
                                <p id="watchlaterAuthor">${data.creator}</p>
                            <div class="watchlaterDetails">
                            </div>
                    </div>  
                        `
let watchlaterList = document.querySelector('.watchlaterList');
    watchlaterList.innerHTML += watchlaterVideoDiv;
    }

    
let likedButton = document.getElementById("btn1");
//console.log(likedButton)
likedButton.addEventListener('click', function(){
//    console.log(selectedVideo)
    likedVideo(selectedVideo)
})

let dislikedButton = document.getElementById("btn2");
dislikedButton.addEventListener('click', function(){
    dislikedVideo(selectedVideo)
})

let watchlaterButton = document.getElementById("btn3");
watchlaterButton.addEventListener('click', function(){
    watchlaterVideo(selectedVideo)
})