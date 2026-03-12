function generateImage(){

let prompt=document.getElementById("prompt").value;

let url="https://image.pollinations.ai/prompt/"+prompt;

document.getElementById("image").src=url;

}