"use strict";

var menuIcon = document.querySelector(".ri-menu-fill");
var flag = true;
menuIcon.addEventListener("click", function () {
  var menu = document.querySelector("#menu");
  menu.classList.toggle("float-none");

  if (flag) {
    this.className = "ri-close-fill";
    this.style = "background:none; font-size:2em;  border:1px solid white ;";
  } else {
    this.className = "ri-menu-fill";
    this.style = "";
  }

  flag = !flag;
});