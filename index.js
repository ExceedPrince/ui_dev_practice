function pageLoad() {
	let root = document.getElementById("root");

	root.insertAdjacentHTML("afterbegin", `
		<div id="container">
			<nav>
				<div class="hamburger">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</div>
				<ul class="nav-links">
					<li><a href="#">Home</a></li>
					<li><a href="#">Open jobs</a></li>
					<li><a href="#">Contacts</a></li>
				</ul>
			</nav>
			<div id="content">
				<h1>Find Your <br>Dream Job <br>with Us</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing <br>
				elit. Praesent semper posuere sagittis. Duis iaculis <br>
				mollis turpis eu malesuada. Sed tristique odio ac <br>
				tincidunt vulputate. Nullam imperdiet enim sed <br>
				commodo laoreet. </p>
				<button type="button" class="btn btn-dark">APPLY</button>
			</div>
		</div>
	`)

	const hamburger = document.querySelector(".hamburger");
	const navLinks = document.querySelector(".nav-links");
	const links = document.querySelectorAll(".nav-links li");

	hamburger.addEventListener("click", () => {
		navLinks.classList.toggle("open");
		links.forEach(link => {
			link.classList.toggle("fade");
		});
	});

}

window.addEventListener("load", pageLoad);