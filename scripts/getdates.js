// Current year
const currentdate = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentdate;

let oLastModif = new Date(document.lastModified);

document.getElementById("lastModify").innerHTML = oLastModif;