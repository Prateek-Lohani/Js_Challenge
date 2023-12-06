const pageHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  const scrolled = (window.scrollY / pageHeight) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
};
