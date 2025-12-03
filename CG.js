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