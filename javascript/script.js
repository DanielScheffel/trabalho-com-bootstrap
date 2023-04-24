const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

const scrollto = (el) => {
    let navbar = document.querySelector('#navbar');
    let offset = navbar.offsetHeight;

    if(!navbar.classList.contains("navbar-scrolled")){
        offset -= 10;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
    });
};

let selectNavbar = document.querySelector('#navbar');
if(selectNavbar){
    const navbarScrolled = () => {
        if(window.scrollY > 100){
            selectNavbar.classList.add("navbar-scrolled");
        } else {
            selectNavbar.classList.remove("navbar-scrolled");
        }
    };
    window.addEventListener("load", navbarScrolled);
    onscroll(document, navbarScrolled);
}

let backtop = document.querySelector("#mytop");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none";
  }
}

function backTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*const backtotop = select(".back-to-top");
if(backtotop){
  const toggleBacktotop = () => {
    if(window.scrollY > 100){
      backtotop.classList.add("active");
    } else{
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}*/

const data = document.querySelector("#current-year");
const date = new Date();

data.textContent = date.getFullYear();

const daysEl = document.querySelectorAll(".timer-days");
  const hoursEl = document.querySelectorAll(".timer-hours");
  const minutesEl = document.querySelectorAll(".timer-minutes");
  const secondsEl = document.querySelectorAll(".timer-seconds");

  const countDown = () => {
    const yourDate = new Date("2023-04-31T23:59:59");

    const countDownDate = new Date(yourDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hh = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const ss = Math.floor((distance % (1000 * 60)) / 1000);

    const ddFormatted = String(dd).padStart(2, "0");
    const hhFormatted = String(hh).padStart(2, "0");
    const mmFormatted = String(mm).padStart(2, "0");
    const ssFormatted = String(ss).padStart(2, "0");

    if (ss < 0) {
      clearInterval(countDownInterval);
      return;
    }

    daysEl.forEach((el) => (el.innerText = `${ddFormatted}d`));
    hoursEl.forEach((el) => (el.innerText = `${hhFormatted}h`));
    minutesEl.forEach((el) => (el.innerText = `${mmFormatted}m`));
    secondsEl.forEach((el) => (el.innerText = `${ssFormatted}s`));
  };

  const countDownInterval = setInterval(countDown, 1000);
  countDown();
