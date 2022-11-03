// WILL TRY TO SEE IF THERE IS LIGHT MODE STORED IN LOCALSTORAGE, WILL BE USED FOR OTHER FUNCTIONS
export function isLight() {
	return localStorage.getItem('light-mode');
}

// TOGGLES LIGHT MODE ON/OFF ACCORDINGLY IF CALLED UPON
export function toggleRootClass() {
	document.querySelector(':root').classList.toggle('light');
}

// SAVES OR REMOVES LIGHT MODE FROM LOCAL STORAGE ACCORDINGLY IF CALLED UPON
export function toggleLocalStorageItem() {
	if (isLight()) {
		localStorage.removeItem('light-mode');
	} else {
		localStorage.setItem('light-mode', 'set');
	}
}
