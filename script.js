let dialed = "";
let data = {
  "404": {"name":"Atlas Systems","menu":{"1":{"text":"Tracking unavailable.","autoText":"Try again later."}}},
  "777": {"name":"Video Clue Channel","video":"https://www.youtube.com/embed/YOUTUBE_ID"}
};

const screen = document.getElementById("screen");
const videoContainer = document.getElementById("videoContainer");
const phoneVideo = document.getElementById("phoneVideo");
const videoSource = document.getElementById("videoSource");

function press(n){
  dialed += n;
  screen.innerText = dialed;
}

function callNumber(){
  if(data[dialed]){
    const biz = data[dialed];
    if(biz.video){
      videoSource.src = biz.video;
      phoneVideo.load();
      videoContainer.style.display="block";
      phoneVideo.play();
      phoneVideo.onended = ()=>{ videoContainer.style.display="none"; };
      screen.innerText = "Playing video: "+biz.name;
    } else {
      screen.innerText = biz.name;
    }
  } else {
    screen.innerText = "Number not in service.";
  }
  dialed = "";
}
