<style>
html, body {
	margin: 0;
	height: 100%;
	width: 100%;
}

header {
	width: 100%;
	padding-bottom: 25px;
	flex-direction: column;
}

img {
max-width: 100%;
max-height: 100vh;
display:block;
margin: auto;
}

.flex {
	display: flex;
	justify-content: center;
	align-items: center;
}
.buttont {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 60px;
}
</style>

  
  
  
  

</head>

<body translate="no" >
  <html>
	<head>
		<title>Random Picture Generator</title>
		<link rel="stylesheet" href="assets/stylesheets/app.css">
	</head>
	<body>
		<header class="flex">
			<h1>Drawpile Fishing</h1>
			<button class="buttont">Generate Random Picture</button>
		</header>
		<section class="flex">
			<img src="">
		</section>
		<script src="assets/scripts/app.js"></script>
	</body>
</html>
  
  
      <script id="rendered-js" >
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
    </script>

  

</body>

</html>
