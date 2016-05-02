$(function() {
//add all functions which need to run here
  navIconClick();

  function navIconClick {
    $navIcon = $('#nav-icon');
    $navIcon.click(function() {
      $(this).addClass('.open');
      
    });
  });

// add all functions here
  });
