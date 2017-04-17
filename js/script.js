$(document).ready(function() {
    $('.btn').click(function(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        $('.table').css({
            'left': x,
            'top': y,
        })
        console.log(e)
        $('.table').toggle('display');
        if (x < 50) {
            $('.table').css({
                'width': x,
                'height': y,
            })
        }
    });
});