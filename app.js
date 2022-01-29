const imageArray = [
	"https://i2.lensdump.com/i/rsoFpb.png",
	"https://i3.lensdump.com/i/rsoUF7.png",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}

//if issues cut here

