function myFunction(){var e=document.getElementById("header_nav");"header-nav"===e.className?e.className+=" header-nav__responsive":e.className="header-nav"}(new WOW).init(),$(".title__container").addClass("slideInDown wow"),$(".about__image").addClass("slideInUp wow"),$(".about__content").addClass("slideInUp wow"),$(".special_recipes__content").addClass("slideInLeft wow"),$(".special_recipes__image").addClass("slideInRight wow"),$(".delightful_exp__gallery-item").addClass("zoomIn wow"),$(".amazing_deli__image:nth-child(odd)").addClass("slideInLeft wow"),$(".amazing_deli__info:nth-child(even)").addClass("slideInRight wow"),$(".amazing_deli__image:nth-child(even)").addClass("slideInRight wow"),$(".amazing_deli__info:nth-child(odd)").addClass("slideInLeft wow"),$(".mobile_app__image").addClass("slideInRight wow"),$(".mobile_app__content").addClass("slideInLeft wow"),$(document).ready(function(){$('a[href^="#"]').on("click",function(e){e.preventDefault();var a=this.hash;$target=$(a),$(window).width()<768?$("html, body").stop().animate({scrollTop:$target.offset().top-$("header").height()},900,"swing",function(){window.location.hash=a}):$("html, body").stop().animate({scrollTop:$target.offset().top-127},900,"swing",function(){window.location.hash=a})})});