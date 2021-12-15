function playBanjoVid(event) {
  event.preventDefault();
  let password = prompt("What's the password? 🤫");

  if (password === "Cash") {
    window.open("banjo.html");
  } else {
    alert("☹️👎🏽");
  }
}

let access = document.querySelector("#video");
access.addEventListener("click", playBanjoVid);
