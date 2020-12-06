function openMenu() {
	var navBar = document.getElementById('nav');

	if (!navBar.style.display || navBar.style.display === 'none') {
		navBar.style.display = 'block';
	} else {
		navBar.style.display = 'none';
	}
}

function darkMode() {
	var docBody = document.body;

	// Toggle Class
	docBody.classList.toggle('dark');
	docBody.classList.toggle('text-darkmode');

	// Change HTML wording
	if (docBody.className === 'dark text-darkmode') {
		document.getElementById('dark').innerHTML = 'Deactivate Dark Mode';
	} else {
		document.getElementById('dark').innerHTML = 'Activate Dark Mode';
	}
}
