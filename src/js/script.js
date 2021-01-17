require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";
import {openModal} from './modules/modal'

window.addEventListener("DOMContentLoaded", function () {

  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", "2021-02-11");
  modal("[data-modal]", ".modal", modalTimerId);
  cards();
  forms('form', modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    slide: ".offer__slide",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  calc();
  
});
