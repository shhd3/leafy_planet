

$(document).ready(function() {

    $('#plantModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var plantName = button.data('plant-name')
        var plantPrice = button.data('plant-price');

        
        var modal = $(this);
        modal.find('#plant-name').text(plantName);
        modal.find('#plant-price').text(plantPrice);
    });

    $('.plant-group-card').on('click', function () {
        var target = $(this).data('target');
        $(target).collapse('toggle');
    });
});



