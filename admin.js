let data = {
  "404": {"name":"Atlas Systems","menu":{"1":{"text":"Tracking unavailable.","autoText":"Try again later."}}},
  "777": {"name":"Video Clue Channel","video":"https://www.youtube.com/embed/YOUTUBE_ID"}
};

const output = document.getElementById("output");
output.textContent = JSON.stringify(data, null, 2);

function addEntry(){
  const num = document.getElementById("number").value;
  const key = document.getElementById("menuKey").value;
  const text = document.getElementById("text").value;
  const autoText = document.getElementById("autoText").value;
  const video = document.getElementById("video").value;

  if(!data[num]) data[num] = {name:"New Business", menu:{}};
  if(key) data[num].menu[key] = {text:text, autoText:autoText};
  if(video) data[num].video = video;

  output.textContent = JSON.stringify(data, null, 2);
  alert("Saved! Refresh player page to see changes.");
}
