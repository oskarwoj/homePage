{
  const mainPhoto = document.querySelector(".main__myPhoto");

  const toogleBackground = () => {
    const changeBackgroundButton = document.querySelector(".buttons__dark");
    const body = document.documentElement;
    
    if (changeBackgroundButton.innerText === "Dark Mode") {
      changeBackgroundButton.innerText = "Light Mode";
      body.classList.add("js-black");
    } else {
      changeBackgroundButton.innerText = "Dark Mode";
      body.classList.remove("js-black");
    }
  };

  const deleteImg = () => {
    mainPhoto.classList.toggle("myPhotoRemove");
  };

  const changeImg = () => {
    const changePhoto = document.querySelector(".buttons__change");
    if (changePhoto.innerText === "Change Image") {
      mainPhoto.src = "https://i.postimg.cc/xd2hvRCP/fawkes-157941-1280.png";
      changePhoto.innerText = "Undo Change ";
    } else {
      mainPhoto.src = "https://i.postimg.cc/L6HPk6VR/photo-small.png";
      changePhoto.innerText = "Change Image";
    }
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".buttons__dark");
    const changePhoto = document.querySelector(".buttons__change");
    const deleteButton = document.querySelector(".buttons__delete");

    changeBackgroundButton.addEventListener("click", toogleBackground);
    deleteButton.addEventListener("click", deleteImg);
    changePhoto.addEventListener("click", changeImg);
  };

  init();
}
