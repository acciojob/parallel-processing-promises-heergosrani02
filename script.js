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

btn.addEventListener("click", () => {
	setInterval(() => {
		load.style.display = "block";
	}, 1000)

	new Promise
})


