//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const error = document.getElementById("error");
const load = document.getElementById("loading");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
  });
}

btn.addEventListener("click", () => {
	load.style.display = 'block';
	Promise.all(images.map(image => downloadImage(image.url))).then(imgs => {
		load.style.display = 'none';
		imgs.forEach(img => output.appendChild(img));
	})
	.catch(err => {
		load.style.display = 'none';
		error.innerText = err.message;
	});
});


