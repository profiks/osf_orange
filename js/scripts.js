$(document).ready(function() {
    
    //fancy box video lightbox
    $('.iframe').fancybox({
    padding: 0,
    type: 'iframe',
    width: 640,
    height: 360,
    aspectRatio: true,
    scrolling: 'no'
    });
     
    
   // $(".iframe").trigger('click');
    
    //fit text for responsivity
    $(".logo").fitText(0.8,{maxFontSize: '75px' });
    
    //responsive slideshow
    $(".rslides").responsiveSlides({
        maxwidth: "980",
        nav: true,
        prevText: "",
        nextText: "",
        after: function(i){
        var num = $('.rslides1_on').index();
        var currentSlide = num + 1;
        var slidesCount = $('.rslides li').size();
    $(".countSlide").html(" Nexs Slide ("+currentSlide+"/"+slidesCount+")"); 
        }
    });
    
   
    
   
    
    
}); //end Dom ready