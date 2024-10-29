/*
  ===============================================
  === This Is Code For Open & Close Mega Menu ===
  ===============================================
*/

let otherButton = document.querySelector("header .main-nav>li:last-child a");
let megaMenu = document.querySelector("header .mega-menu");
let megaMenuLinks = document.querySelectorAll("header .mega-menu .links li a");

otherButton.onclick = function () {
  megaMenu.classList.toggle("open");
};

for (let i = 0; i < megaMenuLinks.length; i++) {
  let megaMenuLink = megaMenuLinks[i];

  megaMenuLink.onclick = function () {
    megaMenu.classList.remove("open");
  };
}