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
    $(".logo").fitText(0.8,{maxFontSize: '120px' });
    
}); //end Dom ready