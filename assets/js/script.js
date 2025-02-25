
 
// main script
(function () {
  "use strict";

  // aos
  AOS.init({
    disable: "mobile",
  });


  document.addEventListener("DOMContentLoaded", function () {
 
    /**
     * Toggle Appearance dropdown option value when user clicks on dropdown item (full with of item is clickable);
     */
    const appearanceButton = document.querySelector(".js--appearance-settings"); 
    const dropdownItems = appearanceButton.querySelectorAll(".js--dropdown-item");    

    dropdownItems.forEach((item) => {
      item.addEventListener('click', (event) => { 
        event.preventDefault();
        const itemOption = item.querySelector('input');
        itemOption.click(); 
      });
    });

  });

 

  })();
