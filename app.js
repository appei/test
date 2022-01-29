const imageArray = [
	"https://i.lensdump.com/i/rsE2t0.png",
	"https://64.media.tumblr.com/tumblr_lri7cqp5sD1qd8xmf.gif",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
