//first load entire html code before applying any js feature.
$(document).ready(function() {
    $("#takeactioncheckbox").on("change", function () {
        //searching quantity of checked checkboxes
        const quantitychecked = $("#takeactioncheckbox input[type=checkbox]:checked").length;
        //making life easier
        const textinputchange = $("#answercheckbox");

        //applying different answers for different input lenghts
        if (quantitychecked == 1) {
           textinputchange.text("//TODO");
        }
        if (quantitychecked == 2) {
           textinputchange.text("//TODO");
        }
        if (quantitychecked == 3) {
           textinputchange.text("//TODO");
        }
        if (quantitychecked == 4) {
           textinputchange.text("//TODO");
        }
        if (quantitychecked == 5) {
           textinputchange.text("//TODO");
        }
    });
});
