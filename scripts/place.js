const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last Modification: ' + document.lastModified;

const calculateWindChill = () => {
    const temp = parseFloat(document.getElementById('temp').textContent);
    const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
    
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}
document.getElementById('windChill').textContent = calculateWindChill();
