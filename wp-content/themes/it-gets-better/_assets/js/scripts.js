const igbDarkMode={init(){this.changeListener(),this.tabindexListener()},changeListener(){const e=document.querySelectorAll('.dark-toggle input[type="checkbox"]');e.length<=0||e.forEach((e=>{e.addEventListener("change",(e=>{this.toggle(e.currentTarget.checked)}))}))},tabindexListener(){document.querySelectorAll(".dark-toggle__switch").forEach((e=>{e.addEventListener("keyup",(e=>{if("Enter"===e.key||13===e.keyCode){const t=e.currentTarget.closest(".dark-toggle").querySelector('input[type="checkbox"]');t.checked=!t.checked,this.toggle(t.checked)}}))}))},toggle(e){document.querySelector("body").classList.toggle("theme-light"),document.querySelector("body").classList.toggle("theme-dark",e),localStorage.setItem("darkMode",e)}};document.addEventListener("DOMContentLoaded",(()=>{igbDarkMode.init()})),setTimeout((function(){document.body.classList.toggle("preload")}),500),function(e){"use strict";e.fn.toggleAttr=function(t,n){return e(this).attr(t)?e(this).removeAttr(t):e(this).attr(t,n),this},e.fn.toggleAttrVal=function(t,n,o){var s=e(this).attr(t);return s===n?(e(this).attr(t,o),this):(e(this).attr(t,n),this)},e("#menu_toggle_button").on("click",(function(t){e(this).toggleClass("menu_open"),e("body").toggleClass("menu_is_open"),e("path.top_line").toggleAttrVal("d","m 5 5 l 30 30","m 15 10 l 20 0"),e("path.bottom_line").toggleAttrVal("d","m 5 35 l 30 -30","m 5 30 l 30 0")}))}(jQuery),jQuery(document).ready((function(e){e("li.current_page_parent").addClass("sub_menu_open"),e(".dropdown_toggle").on("click",(function(t){t.preventDefault(),e(this).hasClass("closed")?(e("li.menu-item-has-children").removeClass("sub_menu_open"),e(".dropdown_toggle").removeClass("open").addClass("closed"),e(this).removeClass("closed").addClass("open"),e(this).parent("li.menu-item-has-children").addClass("sub_menu_open")):(e(this).removeClass("open").addClass("closed"),e(this).parent("li.menu-item-has-children").removeClass("sub_menu_open"));var n=e(this).siblings(".sub-menu");e(".sub-menu.active").not(n).removeClass("active"),n.toggleClass("active"),n.hasClass("active")?(e(".right-column").html(n.clone().addClass("active")),e(".right-column .sub-menu.active").animate({marginLeft:0},300)):e(".right-column .sub-menu.active").animate({marginLeft:"100%"},300,(function(){e(this).remove()}))})),e(document).on("click",(function(t){e(t.target).closest(".right-column").length||e(t.target).closest(".menu-item-has-children").length||(e(".sub-menu.active").removeClass("active"),e(".right-column .sub-menu.active").animate({marginLeft:"100%"},300,(function(){e(this).remove()})))}))})),jQuery(document).ready((function(e){e("#safeExit").hover((function(t){t.preventDefault(),e("#safeExitContent").removeClass("hidden")})),e("#safeExit a").on("click",(function(t){var n=e(this).attr("href");t.preventDefault(),document.body.innerHTML="",window.open(n,"_newtab"),window.location.replace(n)})),e("#safeExitContent").on("mouseleave",(function(t){t.preventDefault(),e("#safeExitContent").addClass("hidden")}))})),jQuery(document).ready((function(e){e(window).scroll((function(){e(window).scrollTop()>=50?e("header.site_main_header").addClass("smaller"):e("header.site_main_header").removeClass("smaller")}))}));
//# sourceMappingURL=scripts.js.map