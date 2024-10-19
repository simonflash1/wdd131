const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last Modification: ' + document.lastModified;