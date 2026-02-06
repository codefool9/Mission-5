$(document).ready(function () {
    $("#btnCalculate").click(function () {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a positive number of hours.");
            $("#hours").val("");
            $("#total").val("");
            return;
        }

        let total = parseFloat(hours) * parseFloat(rate);

        $("#total").val(total.toFixed(2));
    });
});