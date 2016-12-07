var lists = $('.list-entry');
lists.each(function() {
    var feeString = $(this).find('.fee strong').text();
    if (feeString !== '免费') {
        $(this).hide();
    }        
})
