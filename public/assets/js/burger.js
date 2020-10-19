//Wait for DOM is fully loaded before attaching controllers

$(function() {
  //send PUT request upon clicking devour-button, the burger-img
  $(".devour-btn").on('click', function() {

    let id = $(this).data("id");
    let devourState = {
      devoured: "true"
    };

    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(function() {
      //reload the page to get the updated list 
      location.reload();
    });
  });

  //Send POST request 
  $(".order-form").on('submit', function(event) {
    //Prevent page reload on a submit event
    event.preventDefault();

    let newBurger;

    if ($('textarea').val()) {
      newBurger = {
        burger_name: $("textarea").val().trim(),
        devoured: 0
      };
    }

    $.ajax('/api/burgers', {
      type: "POST",
      data: newBurger
    }).then(function() {
      //Reload page to get the updated list
      location.reload();
    });
  });
});