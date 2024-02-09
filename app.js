const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Sneakers",
    price: 10999,
    colors: [
      {
        code: "beidge",
        img: "./img/images/CA Pro 'Sport for the Fanbase' Unisex Sneakers.png",
      },
    ],
  },
  {
    id: 2,
    title: "Running Shoes",
    price: 18399,
    colors: [
      {
        code: "Blue-Red",
        img: "./img/images/Fast-R Nitro Elite Men's Running Shoes.png",
      },
    ],
  },
  {
    id: 3,
    title: "Walking Shoes",
    price: 13999,
    colors: [
      {
        code: "Red",
        img: "/img/images/SOFTRIDE Enzo Evo Unisex Running Shoes.png",
      },
      {
        code: "Inky-blue",
        img: "./img/images/SOFTRIDE 2.png",
      },
      {
        code: "black",
        img: "./img/images/SOFTRIDE 3.png",
      },
    ],
  },
  {
    id: 4,
    title: "Gym",
    price: 12999,
    colors: [
      {
        code: "black",
        img: "./img/images/PWR NITRO SQD Men's Training Shoes.png",
      },
      {
        code: "white",
        img: "./img/images/PWR 2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Slides",
    price: 6499,
    colors: [
      {
        code: "Vivid violet",
        img: "./img/images/PUMA x SPONGEBOB RS-Slide Unisex Slides.png",
      },
    ],
  },
];

let choosenProduct = products[0];

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, i) => {
      color.style.backgroundColor = choosenProduct.colors[i].code;

      color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[i].img;
      });
    });

    currentProductSizes.forEach((size, i) => {
      size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
          s.style.backgroundColor = "white";
          s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
    });
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
