console.log("Witam developerów !");

let dark = document.querySelector(".js-main");
let button1 = document.querySelector(".buttons__dark");

let mainPhoto = document.querySelector(".main__myPhoto");
let button2 = document.querySelector(".buttons__change");

let button3 = document.querySelector(".buttons__delete");

button1.addEventListener("click", () => {
  if (button1.innerText === "Dark Mode") {
    button1.innerText = "Light Mode";
    dark.classList.add("js-black");
  } else {
    button1.innerText = "Dark Mode";
    dark.classList.remove("js-black");
  }
});

button2.addEventListener("click", () => {
  if (button2.innerText === "Change Image") {
    mainPhoto.src = "https://i.postimg.cc/xd2hvRCP/fawkes-157941-1280.png";
    button2.innerText = "Undo Change ";
  } else {
    mainPhoto.src = "https://i.postimg.cc/L6HPk6VR/photo-small.png";
    button2.innerText = "Change Image";
  }
});

button3.addEventListener("click", () => {
  mainPhoto.classList.toggle("myPhotoRemove");
});
