const slider = document.querySelector(".list_image-scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  clearInterval(idAutoScroll);
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");

  //setinterval
  idAutoScroll = setInterval(() => {
    const walk = -1.5; //scroll-fast
    if (slider.scrollLeft > 0 && scrollLeft == slider.scrollLeft) {
      const child = `
            <img src="https://picsum.photos/202" alt="" srcset="" />
            <img src="https://picsum.photos/203" alt="" srcset="" />
            <img src="https://picsum.photos/204" alt="" srcset="" />
            <img src="https://picsum.photos/205" alt="" srcset="" />
            <img src="https://picsum.photos/206" alt="" srcset="" />
            <img src="https://picsum.photos/207" alt="" srcset="" />
            <img src="https://picsum.photos/208" alt="" srcset="" />
            <img src="https://picsum.photos/209" alt="" srcset="" />
            <img src="https://picsum.photos/210" alt="" srcset="" />
            <img src="https://picsum.photos/211" alt="" srcset="" />
            <img src="https://picsum.photos/212" alt="" srcset="" />
            <img src="https://picsum.photos/214" alt="" srcset="" />`;
      slider.innerHTML += child;
    } else {
      scrollLeft = slider.scrollLeft;
    }
    slider.scrollLeft = scrollLeft - walk;
  }, 50);
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(slider.scrollLef); //-150
});

let idAutoScroll = setInterval(() => {
  const walk = -1.5; //scroll-fast
  if (slider.scrollLeft > 0 && scrollLeft == slider.scrollLeft) {
    const child = `
                <img src="https://picsum.photos/202" alt="" srcset="" />
                <img src="https://picsum.photos/203" alt="" srcset="" />
                <img src="https://picsum.photos/204" alt="" srcset="" />
                <img src="https://picsum.photos/205" alt="" srcset="" />
                <img src="https://picsum.photos/206" alt="" srcset="" />
                <img src="https://picsum.photos/207" alt="" srcset="" />
                <img src="https://picsum.photos/208" alt="" srcset="" />
                <img src="https://picsum.photos/209" alt="" srcset="" />
                <img src="https://picsum.photos/210" alt="" srcset="" />
                <img src="https://picsum.photos/211" alt="" srcset="" />
                <img src="https://picsum.photos/212" alt="" srcset="" />
                <img src="https://picsum.photos/214" alt="" srcset="" />`;
    slider.innerHTML += child;
  } else {
    scrollLeft = slider.scrollLeft;
  }
  slider.scrollLeft = scrollLeft - walk;
}, 50);
