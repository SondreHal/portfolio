// TO SAVE CURRENT CHECKBOX STATUS FOR FUTURE PAGE VISITS
export function save() {
	let checkbox = document.getElementById('themeToggle');
	localStorage.setItem('themeToggle', checkbox.checked);
}

// WILL CHECK CHECKBOX STATUS IN LOCALSTORAGE SO IT CAN BE USED TO SET CHECKBOX ACCORDINGLY
export function load() {
	let checked = JSON.parse(localStorage.getItem('themeToggle'));
	document.getElementById('themeToggle').checked = checked;
}
