// Select all <a> elements on the page
const links = document.querySelectorAll('a');

// Loop through the <a> elements
links.forEach((link) => {
	const href = link.getAttribute('href');

	// Check if href is missing or set to "#"
	if (!href || href === '#') {
		// Highlight the link by setting a yellow background
		link.style.outline = '2px solid #ef4444';
		link.style.outlineOffset = '8px';
	}
});
