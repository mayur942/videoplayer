function videoThumbnail(data){
	let preview = document.querySelector(".preview");
	for(const key in data){
		let vidinfo = document.createElement("div");
		let vidthumbnail =document.createElement("div");
		let vidimg	= document.createElement("img");
		let vidtitle = document.createElement("div");
		let vidcreator = document.createElement("div");
		vidinfo.classList.add("format");
		vidimg.src=data[key].thumbnailsrc;
		vidtitle.innerText = data[key].title;
		vidcreator.innerText = data[key].creator;
		vidthumbnail.appendChild(vidimg);
		vidinfo.appendChild(vidthumbnail);
		vidinfo.appendChild(vidtitle);
		vidinfo.appendChild(vidcreator);
		preview.appendChild(vidinfo);
		vidinfo.onclick=function(){
			console.log(data[key])
			localStorage.setItem("selectedVideo",JSON.stringify(data[key]));
			window.location.href="video.html"
		}
		}
}



let myVideo = (currVideo) => fetch("videos.json").then(res =>{
	return res.json();
	// console.log(res.json())
})
.then(data =>{
	videoThumbnail(data);
	// console.log(data[0].)
	console.log(data)
})

myVideo();