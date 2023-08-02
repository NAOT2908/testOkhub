

// function handleScroll(){
//   const navbar = document.getElementById("navbar");
//   const offset = window.scrollY;
//   if (offset > 200) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// };
// window.addEventListener("scroll", handleScroll);

function showContentAndImage(title, description, imageUrl) {
  const menuTitle = document.getElementById("menu_title");
  const menuDescription = document.getElementById("content");
  const menuImage = document.getElementById("menu_image");

  menuTitle.textContent = title;
  menuDescription.textContent = description;
  menuImage.src = imageUrl;

  // Hiển thị menu_content khi hover vào row
  const menuContent = document.querySelector(".menu_content");
  menuContent.style.display = "block";
}

function resetContentAndImage() {
  const menuTitle = document.getElementById("menu_title");
  const menuDescription = document.getElementById("menu_content");
  const menuImage = document.getElementById("menu_image");

  // menuTitle.textContent = '';
  // menuDescription.textContent = '';
  // menuImage.src = '';

  // Ẩn menu_content khi rời chuột ra khỏi row
  const menuContent = document.querySelector(".menu_content");
  menuContent.style.display = "none";
}

function imgSlider(anything, title1, title2, title3, description) {
  const bgheader = document.querySelector(".header");
  bgheader.style.backgroundImage = anything;

  const textTitle = document.querySelectorAll(".header_title h1");
  textTitle[0].textContent = title1;
  textTitle[1].textContent = title2;
  textTitle[2].textContent = title3;

  const textDescription = document.querySelector(".description");
  textDescription.textContent = description;
}

// function changeColor(color){
//   const circle = document.querySelector('.circle');
//   circle.style.backgroundColor = color;

// }

// Hàm để tăng số trong các div có class "counter"
function animateCounters() {
  const counterElements = document.querySelectorAll(".counter");

  counterElements.forEach((counterElement) => {
    const targetValue = parseInt(counterElement.innerText, 10);
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 50); // Tốc độ tăng số

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      counterElement.innerText = currentValue;
    }, 200); // Thời gian cập nhật
  });
}

animateCounters();
