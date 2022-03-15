/*
 * Copyright (C) Khorne Bot - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Khorne <radioactiveaj06@gmail.com>, March 2022
 */

$(() => {
    let vh = window.innerHeight / 100;
    let vw = window.innerWidth / 100;
    let headerScroll = Math.floor(10*vh)
    let doneScrolling = false;
    if (headerScroll>window.scrollY) {
      $(".dropdown").css("top", (((headerScroll/2) + (window.scrollY/2))-3) + "px")
      $("#logo").css({"height":((16*vh)-window.scrollY),"width":((16*vh)-window.scrollY),"top":window.scrollY,"left":(window.scrollY/2)})
      $(".big").css({"font-size":((16*vh)-window.scrollY) + "px","height":((16*vh)-window.scrollY),"top":(window.scrollY/2),"letter-spacing":(window.scrollY/1.5)})
    } else {
      $(".dropdown").css("top", headerScroll + "px")
      $("#logo").css({"height":(6*vh),"width":(6*vh),"top":headerScroll,"left":(headerScroll/2)})
      $(".big").css({"font-size":(6*vh) + "px","height":(6*vh),"top":(headerScroll/2),"letter-spacing":(headerScroll/1.5)})
    }
    //if (navigator.userAgent.includes("Trident")) {// for IE users only
    //}
    
    $(window).scroll(() => {
      if (window.scrollY > headerScroll) {
        doneScrolling = true
        $(".dropdown").css("top", headerScroll + "px")
        $("#logo").css({"height":(6*vh),"width":(6*vh),"top":headerScroll,"left":(headerScroll/2)})
        $(".big").css({"font-size":(6*vh) + "px","height":(6*vh),"top":(headerScroll/2),"letter-spacing":(headerScroll/1.5)})
      } else if (window.scrollY < headerScroll) {
        doneScrolling = false
      }
      if (!doneScrolling) {
        $(".dropdown").css("top", ((headerScroll/2) + (window.scrollY/2)) + "px")
        $("#logo").css({"height":((16*vh)-window.scrollY),"width":((16*vh)-window.scrollY),"top":window.scrollY,"left":(window.scrollY/2)})
        $(".big").css({"font-size":((16*vh)-window.scrollY) + "px","height":((16*vh)-window.scrollY),"top":(window.scrollY/2),"letter-spacing":(window.scrollY/1.5)})
      }
    });
  });
  