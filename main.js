const navBarMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const imgMenu = document.querySelector(".menu");
const iconCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const asideProductDetail = document.querySelector(".product-detail");
const buttonCloseProductDetail = document.querySelector(
  ".product-detail-close"
);

navBarMail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  asideProductDetail.classList.add("inactive");
  asideCart.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

imgMenu.addEventListener("click", toggleBurgerMenu);

function toggleBurgerMenu() {
  asideProductDetail.classList.add("inactive");
  asideCart.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

iconCart.addEventListener("click", toggleAsideCart);

function toggleAsideCart() {
  asideProductDetail.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  asideCart.classList.toggle("inactive");
}

buttonCloseProductDetail.addEventListener("click", closeProductDetail);

function closeProductDetail() {
  asideProductDetail.classList.add("inactive");
}

function openProductDetailAside(event) {
  displayInfoInProductDetail(event);

  desktopMenu.classList.add("inactive");
  asideCart.classList.add("inactive");
  mobileMenu.classList.add("inactive");

  asideProductDetail.classList.remove("inactive");
}

function displayInfoInProductDetail(event) {
  const new_img_product_detail = event.path[0].src;

  const product_info = event.path[1].childNodes[1];

  const price = product_info.querySelector("div p:first-child");
  const name = product_info.querySelector("div p:nth-child(2)");
  const description = product_info.querySelector("div p:nth-child(3)");



  const product_detail_img =asideProductDetail.querySelector("img:nth-child(2)");

  product_detail_img.setAttribute("src", new_img_product_detail);
  product_detail_img.setAttribute("alt", name.textContent);

  const product_detail_price = asideProductDetail.querySelector(".product-info-detail p:nth-child(1)");
  product_detail_price.innerText = price.textContent;

  const product_detail_name = asideProductDetail.querySelector(".product-info-detail p:nth-child(2)");
  product_detail_name.innerText = name.textContent;

  const product_detail_description = asideProductDetail.querySelector(".product-info-detail p:nth-child(3)");
  product_detail_description.innerText = description.textContent;
}

const productList = [
  {
    name: "Bike",
    price: 12700,
    description: "Vehículo de dos ruedas , normalmente de igual tamaño , cuyos pedales transmiten el movimiento a la rueda trasera por medio de un plato , un piñón y una cadena",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Bicycle helmet",
    price: 1200,
    description: "Cobertura de metal o de otra materia , que se usa para proteger la cabeza de heridas , contusiones , etc.",
    image:
      "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  },
  {
    name: "Bicycle helmet",
    price: 1600,
    description: "Un casco es una forma de prenda protectora usada en la cabeza y hecha generalmente de metal o de algún otro material resistente",
    image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
  },
  {
    name: "Bicycle helmet",
    price: 1500,
    description: "El principal objetivo del casco de seguridad es proteger la cabeza de quien lo usa de peligros y golpes mecánicos.",
    image:
      "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  },
  {
    name: "Seat",
    price: 300,
    description: "Asiento de bicicleta de gran tamaño, compatible con bicicletas Peloton, ejercicio o carretera, repuesto de silla de bicicleta con cojín.",
    image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
  },
  {
    name: "Tennis Montain Bike",
    price: 2200,
    description: "Encuentra aquí zapatos de ciclismo. El agarre está asegurado gracias a las suelas de goma Stealth, encargadas de ofrecer una adherencia máxima.",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
  },
  {
    name: "Sunglasses",
    price: 800,
    description: "Las gafas de ciclismo son esenciales para montar bicicleta ya que brindan protección y comodidad.",
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
  },
  {
    name: "Sunglasses",
    price: 600,
    description: "Comprar unas gafas de ciclismo o MTB para andar en bicicleta puede ser una tarea fácil.",
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
  },
  {
    name: "Bicycle seat bag",
    price: 876,
    description: "un morral le permite mantener la bicicleta más estable, especialmente si está cargado con peso.",
    image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
  },
];

function renderArrays(arr) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.image);
    productCard.appendChild(imgProduct);
    imgProduct.addEventListener("click", openProductDetailAside);

    const divProductInfo = document.createElement("div");
    divProductInfo.classList.add("product-info-cards");
    productCard.appendChild(divProductInfo);

    const divTextos = document.createElement("div");
    divProductInfo.appendChild(divTextos);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    divTextos.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerText = product.name;
    divTextos.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;
    productDescription.classList.add('inactive');
    divTextos.appendChild(productDescription);

    const figure = document.createElement("figure");
    const imgFigure = document.createElement("img");
    imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    figure.appendChild(imgFigure);
    divProductInfo.appendChild(figure);

    cardContainer.appendChild(productCard);
  }
}

renderArrays(productList);
