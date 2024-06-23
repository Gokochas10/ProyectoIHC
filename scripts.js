function togglePopupMenu() {
  var popupMenu = document.getElementById("popupMenu");
  if (popupMenu.style.display === "block") {
    popupMenu.style.display = "none";
  } else {
    popupMenu.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const prev = document.querySelector('.carousel-control-prev');
  const next = document.querySelector('.carousel-control-next');
  const items = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }

  prev.addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  next.addEventListener('click', function () {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });
});
