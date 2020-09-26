var editing = false;

//Check off specific todo by clicking
$("ul").on("click", "li .todo", function () {
  $(this).toggleClass("completed");
});

// Remove todos
$("ul").on("click", "li .delete", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

// edit todos
$("ul").on("click", "li .edit", function (event) {
  editing = true;
  toDoText = $(this).parent();
  $("#toDotxt").val($(this).parent().text());
  $("input[type='text']").keypress(function (event) {
    if (event.which === 13 && editing === true) {
      var toDoUpdated = $(this).val();
      toDoText.html(
        "<span class='delete'><i class='fa fa-trash'></i></span> " +
          "<span class='todo'>" +
          toDoUpdated +
          "</span>" +
          "<span class='edit'><i class='fa fa-edit'></i></span>" +
          "</li>"
      );
      $(this).val("");
      editing = false;
    }
  });
});

//input todo
$("input[type='text']").keypress(function (event) {
  if (event.which === 13 && editing === false) {
    var toDoNew = $(this).val();
    $("ul").append(
      "<li>" +
        "<span class='delete'><i class='fa fa-trash'></i></span> " +
        "<span class='todo'>" +
        toDoNew +
        "</span>" +
        "<span class='edit'><i class='fa fa-edit'></i></span>" +
        "</li>"
    );
    $(this).val("");
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
