const imageArray = [
	"https://i2.lensdump.com/i/rsoFpb.png",
	"https://i3.lensdump.com/i/rsoUF7.png",
  "https://i1.lensdump.com/i/rsfywC.png",
  "https://i2.lensdump.com/i/rsFT0Q.png",
  "https://i2.lensdump.com/i/rsxzRF.png",
	"https://i2.lensdump.com/i/rsxj2Q.png"
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
