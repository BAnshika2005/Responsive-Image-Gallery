const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = document.querySelectorAll(".gallery .image");
let currentIndex = 0;

// Open Lightbox
images.forEach((imgBox, index) => {
  imgBox.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = imgBox.querySelector("img").src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

// Next Image
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].querySelector("img").src;
};

// Prev Image
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].querySelector("img").src;
};

// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    images.forEach(imgBox => {
      const imgCategory = imgBox.getAttribute("data-category");
      if (category === "all" || imgCategory === category) {
        imgBox.style.display = "block";
      } else {
        imgBox.style.display = "none";
      }
    });
  });
});
