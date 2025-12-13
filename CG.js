if (document.getElementById("sapa")) {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    var sapa = prompt("masukkan nama:");
    if (sapa) {
      alert("halo " + sapa + "!");
    } else if (sapa === null) {
      sapa = "tanpa nama";
    } else {
      sapa = "tanpa nama";
    }
    document.getElementById("sapa").innerHTML += sapa + ", selamat datang" + "!";
    document.body.style.overflow = "auto";
  }, 1500);
}
function menu() {
    document.getElementById("menu").classList.toggle("show");
    var ham = document.getElementById("hamburger");
    if (ham.innerHTML === "☰") {
      ham.innerHTML = "&#10005;";
    } else {
      ham.innerHTML = "&#9776;";
    }
    ham.classList.toggle("showham");
  }
  function url(url) {
    location.href = url;
  }
document.getElementById("logohome").innerHTML = `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M3 10L12 3L21 10V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z"
        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 21V14H15V21" 
        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
document.getElementById("logoabout").innerHTML = `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="black" stroke-width="2"/>
  <line x1="12" y1="10" x2="12" y2="16" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <circle cx="12" cy="7" r="1.5" fill="black"/>
</svg>
`;
document.getElementById("logocontact").innerHTML = `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M4 5H20C21.1 5 22 5.9 22 7V15C22 16.1 21.1 17 20 17H8L4 20V7C4 5.9 4.9 5 6 5Z"
        stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <line x1="8" y1="10" x2="16" y2="10" stroke="black" stroke-width="2"/>
  <line x1="8" y1="13" x2="14" y2="13" stroke="black" stroke-width="2"/>
</svg>
`;
document.getElementById("youtubeimg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtAI_XKdifuff3fZFsft-TM5feo0gNYamBwLZZCt2-A&s=10";
document.getElementById("facebookimg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IN0bXXU1QoLiXjnQYNugN3Qo7UoirMJfC6QHn1g2mQ&s";
document.getElementById("ximg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLXZ9oz6nyPJJDTfuQUY1dCVydQZ-hzINL_1_814cwQ&s=10";
      
