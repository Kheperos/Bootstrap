

$(".dropdown").on("shown.bs.dropdown", function(event){
    var x = $(event.relatedTarget).text(); // Get the text of the element
    alert(x);
});
