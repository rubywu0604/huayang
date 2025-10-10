const slides = document.querySelectorAll('.carousel-slides img');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  showSlide(current);
  setInterval(nextSlide, 3000); // 每 3 秒切換
});

// 取得按鈕
const backToTopButton = document.getElementById("backToTop");

// 當滾動超過 200px 時顯示按鈕
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// 點擊按鈕回到頂部，平滑滾動
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});