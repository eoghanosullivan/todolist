//Check off specific todo by clicking
$('ul').on("click", "li", function () {
    $(this).toggleClass('completed');
});
// Remove todos
$('ul').on("click", "li .delete", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var toDoNew = $(this).val()
        $('ul').append("<li>" + "<span class='delete'><i class='fa fa-trash'></i>  </span>" + toDoNew + "</li>")
        $(this).val("");
    }
})

$('.fa-plus').click(function () {
    $("input[type='text']").fadeToggle();
})