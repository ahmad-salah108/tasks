const btn = document.querySelector('button');

btn.addEventListener("click", () => {
  if(btn.dataset.visibility == 'true'){
    btn.setAttribute('data-visibility', false);
  }else{
    btn.setAttribute('data-visibility', true);
  }
});

//Stop Animations During Window Resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});