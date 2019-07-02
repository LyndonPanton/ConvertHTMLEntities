"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function convert(string) {
		if (string === "") {
			return "???";
		} else if (!string) {
			return "Input must contain more than zero non white space characters";
		} else {
			let newString = "";

			// Method I
			for (let i = 0; i < string.length; i++) {
				if (string[i] === "&") {
					newString = newString + "&amp;";
				} else if (string[i] === "<") {
					newString = newString + "&lt;";
				} else if (string[i] === ">") {
					newString = newString + "&gt;";
				} else if (string[i] === '"') {
					newString = newString + "&quot;";
				} else if (string[i] === "'") {
					newString = newString + "&apos;"
				} else {
					newString = newString + string[i];
				}
			}

			// Method II
			// newString = string.replace(/&/, "&amp;")
			// 				  .replace(/</, "&lt;")
			// 				  .replace(/>/, "&gt;")
			// 				  .replace(/"/, "&quot;")
			// 				  .replace(/'/, "&apos;");

			return newString;
		}
	}

	function display(result) {

	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		convert(this.children[0].value);
	});
};