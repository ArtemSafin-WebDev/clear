
var $menuGroup = $('.sub-menu');

$(document).on('click', function(event) {
    $target = $(event.target);
    if(!$target.closest('header').length &&
        $('.sub-menu__container').is(":visible")) {
        $menuGroup.find('.show').collapse('hide');
    }
});

var $dirGroup = $('#directionBlocks');

$('.directions #directionBlocks a[data-toggle="collapse"]').on('click',function(){
    if($(this).attr('aria-expanded') === 'true' || ! $dirGroup.find('.collapsing')){
        return false
    }
});

var $oppGroup = $('.opportunities__row--tiles');
$oppGroup.on('show.bs.collapse','.collapse', function() {
    $oppGroup.find('.collapse.show').collapse('hide');
    $('.opportunities__bg img.fadeIn').removeClass('fadeIn').addClass('fadeOut');
    var control = $(this).attr('id');
    $('[data-opp=' + control + ']').removeClass('fadeOut').addClass('fadeIn');
});


$('.opportunities a[data-toggle="collapse"]').on('click',function(){
    if($(this).attr('aria-expanded') === 'true'){
        return false
    }
});



