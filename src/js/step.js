function showStepInfo(element){
    var list = $(element).parents('ol');
    var li = $(element).parents('li');
    var is_active = li.attr('aria-active') === "true" || false;

    if(!is_active){
        var active_button = $(list).find('li[aria-active="true"] button');
        var acitve_li = $(list).find('li[aria-active="true"]');
        $(active_button).removeClass('h-20 w-20 border-brand-500 border-2').addClass('h-14 w-14');
        $(active_button).find('span.bg-brand-500').removeClass('bg-brand-500 text-white').addClass('bg-brand-50 text-brand-500');
        $(acitve_li).attr('aria-active', 'false');
        $(acitve_li).find('.step_info').fadeOut(500);

        $(element).removeClass('h-14 w-14').addClass('h-20 w-20 border-brand-500 border-2');
        $(element).find('span.bg-brand-50').removeClass('bg-brand-50 text-brand-500').addClass('bg-brand-500 text-white');
        $(element).parents('li').attr('aria-active', 'true');
        $(element).parents('li').find('.step_info').fadeIn(500);

    }
}
function showVerticalStepInfo(element){
    var list = $(element).parents('ol');
    var li = $(element).parents('li');
    var is_active = li.attr('aria-active') === "true" || false;

    if(!is_active){
        var active_circle = $(list).find('li[aria-active="true"] button .step_circle');
        var acitve_li = $(list).find('li[aria-active="true"]');
        $(active_circle).removeClass('border-2 border-brand-500 bg-white');
        $(active_circle).find('span').removeClass('bg-brand-500 text-white').addClass('bg-brand-50 text-brand-500');
        $(acitve_li).attr('aria-active', 'false');
        $(acitve_li).find('.step_info').fadeOut(500);

        $(element).find('.step_circle').addClass('border-2 border-brand-500 bg-white');
        $(element).find('.step_circle span').removeClass('bg-brand-50 text-brand-500').addClass('bg-brand-500 text-white');
        $(element).parents('li').attr('aria-active', 'true');
        $(element).parents('li').find('.step_info').fadeIn(500);

    }
}