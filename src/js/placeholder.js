function removePlaceholder(element) {

    $(element).parent().removeClass('bg-gray-400 animate-pulse placeholder');
    $(element).parent().addClass('loaded');

  }