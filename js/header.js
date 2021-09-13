const scrollHeader = document.querySelector("header nav");

// const Header = scrollHeader.querySelector("header");

let statusScrollHeader = false;

document.onscroll = function () {
  changeHeaderStatus();
};

const changeHeaderStatus = () => {
  window.scrollY >= 1
    ? (statusScrollHeader = true)
    : (statusScrollHeader = false);

  changeHeaderScroll();
};

const headerFontLis = [
  ...document.querySelectorAll("header nav .nav_container ul li"),
];
const headerFontAs = [
  ...document.querySelectorAll("header nav .nav_container ul a"),
];
const changeHeaderScroll = () => {
  if (statusScrollHeader == false) {
    scrollHeader.removeAttribute("style");
    for (const headerFontLi of headerFontLis) {
      headerFontLi.removeAttribute("style");
    }
    for (const headerFontA of headerFontAs) {
      headerFontA.removeAttribute("style");
    }
  }
  if (statusScrollHeader == true) {
    scrollHeader.style.backgroundColor = "#f8f7f4";
    for (const headerFontLi of headerFontLis) {
      headerFontLi.style.color = "black";
    }
    for (const headerFontA of headerFontAs) {
      headerFontA.style.color = "black";
    }
  }
};

const body = document.querySelector("body");
const iconCart = document.querySelector(".cart_icon");
const modalContainer = document.querySelector(".modal_container");
const modalForm = document.querySelector(".modal_form");
const iconCloseModalCart = document.querySelector(".close_modal_cart");

iconCart.onclick = () => {
  modalContainer.style.display = "block";
  scrollHeader.style.backgroundColor = "#f8f7f4";
  /// overflow
  body.style.overflow = "hidden";

  for (const headerFontLi of headerFontLis) {
    headerFontLi.style.color = "black";
  }
  for (const headerFontA of headerFontAs) {
    headerFontA.style.color = "black";
  }
};

iconCloseModalCart.onclick = () => {
  modal_off();
};

modalContainer.onclick = () => {
  modal_off();
};

function modal_off() {
  modalForm.classList.add("scale-out");
  setTimeout(() => {
    /// overflow
    body.style.overflow = "auto";
    modalContainer.style.display = "none";
    modalForm.classList.remove("scale-out");
  }, 300);
}

modalForm.onclick = (e) => {
  e.stopPropagation();
};
