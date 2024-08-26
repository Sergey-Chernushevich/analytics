"use strict";var diagramBlockList=document.querySelectorAll(".diagramBlock"),diagramWrapper=document.querySelector(".diagramWrapper");function addActiveClass(){diagramBlockList.forEach((function(e){e.classList.remove("diagramBlock_active")})),window.innerWidth>992?diagramBlockList[3].classList.add("diagramBlock_active"):diagramBlockList[4].classList.add("diagramBlock_active")}addActiveClass(),diagramBlockList.forEach((function(e){e.addEventListener("mouseover",(function(){diagramBlockList.forEach((function(e){e.classList.remove("diagramBlock_active")})),e.classList.add("diagramBlock_active")}))})),diagramWrapper.addEventListener("mouseout",(function(){addActiveClass()})),window.addEventListener("resize",(function(){addActiveClass()}));var preloader=document.querySelector(".preloader"),header=document.querySelector(".header"),headerLogo=header.querySelector(".headerLogo"),headerNavigation=header.querySelector(".navigation"),headerSignInButton=header.querySelector(".header__signInButton"),headerBurgerButton=header.querySelector(".burgerButton"),blockInfo=document.querySelector(".blockInfo"),blockInfo__butoon=document.querySelector(".blockInfo__butoon"),offset=window.innerHeight;function showElement(e){e.classList.add("show")}function handleScroll(){for(var e=document.querySelectorAll(".anim"),t=0;t<e.length;t++){e[t].getBoundingClientRect().top-offset<0?e[t].classList.add("show"):e[t].classList.remove("show")}}document.body.style.overflow="hidden",window.onload=function(){preloader.style.display="none",document.body.style.overflow="auto",showElement(headerLogo),showElement(headerNavigation),showElement(headerSignInButton),showElement(headerBurgerButton),showElement(diagramWrapper),showElement(blockInfo),setTimeout((function(){showElement(blockInfo__butoon)}),2e3)},window.addEventListener("scroll",handleScroll),addEventListener("resize",handleScroll);var burgerMenuBtn=document.querySelector(".burgerButton"),burgerMenuWrapper=document.querySelector(".burgerMenuWrapper"),burgerNavigationList=burgerMenuWrapper.querySelectorAll(".navigationList__item"),burgerMenu=document.querySelector(".burgerMenu"),burgerMenuSignInButton=burgerMenuWrapper.querySelector(".burgerMenu__signInButton");function toggleBurgerMenu(){burgerMenuBtn.classList.toggle("burgerButton_active"),burgerMenuWrapper.classList.toggle("burgerMenuWrapper_active"),burgerMenu.classList.toggle("burgerMenu_active"),burgerMenuWrapper.classList.contains("burgerMenuWrapper_active")?document.body.style.overflow="hidden":document.body.style.overflow="auto"}document.addEventListener("scroll",(function(){var e=window.scrollY;burgerMenuWrapper.style.top="".concat(e,"px")})),burgerMenuBtn.addEventListener("click",(function(e){toggleBurgerMenu(e)})),burgerMenuSignInButton.addEventListener("click",(function(e){toggleBurgerMenu(e)})),burgerMenuWrapper.addEventListener("click",(function(e){e.target===burgerMenuWrapper&&toggleBurgerMenu(e)})),burgerNavigationList.forEach((function(e){e.addEventListener("click",(function(){toggleBurgerMenu()}))}));var _select=function(){var e=document.querySelector(".select__header"),t=document.querySelectorAll(".select__item");function r(){t.forEach((function(e){e.classList.remove("select__item_selected")})),this.classList.add("select__item_selected");var e=this.innerText;_select=this.closest(".select"),console.log(_select),_select.querySelector(".select__current").value=e,_select.classList.add("select_selected")}e.addEventListener("click",(function(){this.parentElement.classList.toggle("is-active")})),t.forEach((function(e){e.addEventListener("click",r)}))};_select();var validateEmail=function(e){return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},validatePhoneNumber=function(e){return String(e).toLowerCase().match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)},registrationForm=document.querySelector(".registrationForm"),formInputs=registrationForm.querySelectorAll("input");formInputs.forEach((function(e){e.addEventListener("blur",(function(){switch(e.getAttribute("name")){case"name":this.value.length<1?this.classList.add("invalid"):this.classList.add("filled");break;case"email":validateEmail(this.value)?this.classList.add("filled"):this.classList.add("invalid");break;case"phoneNumber":validatePhoneNumber(this.value)?this.classList.add("filled"):this.classList.add("invalid")}}))})),formInputs.forEach((function(e){e.addEventListener("focus",(function(){this.classList.remove("invalid"),this.classList.remove("filled")}))}));var pricingSlider=new Swiper(".swiper",{direction:"horizontal",loop:!1,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:20,slidesPerView:1.45,allowTouchMove:!0},576:{slidesPerView:2,loop:!1,allowTouchMove:!0},767:{slidesPerView:2.3,spaceBetween:30,allowTouchMove:!0},992:{slidesPerView:3,spaceBetween:30,allowTouchMove:!1},1430:{spaceBetween:80,slidesPerView:3,allowTouchMove:!1}}}),pricingSlideList=document.querySelectorAll(".pricing__slide");pricingSlideList.forEach((function(e){var t=e.querySelector(".button");e.addEventListener("mouseover",(function(){t.classList.contains("transparentButton")&&(t.classList.remove("transparentButton"),t.classList.add("redButton"))})),e.addEventListener("mouseout",(function(){t.classList.contains("redButton")&&(t.classList.remove("redButton"),t.classList.add("transparentButton"))}))}));