const scrollHeader = document.querySelector("header nav");

// const Header = scrollHeader.querySelector("header");

let statusScrollHeader = false;

document.onscroll = function () {
  changeHeaderStatus();
};

const changeHeaderStatus = () => {
  window.scrollY >= 10
    ? (statusScrollHeader = true)
    : (statusScrollHeader = false);

  changeHeaderScroll();
};

const changeHeaderScroll = () => {
  const headerFontLis = [
    ...document.querySelectorAll("header nav .nav_container ul li"),
  ];
  const headerFontAs = [
    ...document.querySelectorAll("header nav .nav_container ul a"),
  ];
  if (statusScrollHeader == false) {
    scrollHeader.style.backgroundColor = "unset";
    for (const headerFontLi of headerFontLis) {
      headerFontLi.style.color = "white";
    }
    for (const headerFontA of headerFontAs) {
      headerFontA.style.color = "white";
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
