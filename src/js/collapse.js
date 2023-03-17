function toggleExpand(sectionId) {
    var section = $('#'+sectionId);
    var button = $('button[aria-controls="' + sectionId + '"]');
    var expanded = button.attr("aria-expanded") === "true" || false;
    var faqs_group = button.parents('.faqs');

    if(!expanded){
      //desativa todos os faqs
      faqs_group.find('.faq').attr("aria-expanded", expanded);
      faqs_group.find('.faq .icon_collapse').toggleClass("hidden", expanded);
      faqs_group.find('.answer').hide();
      //ativa o faq clicado
      section.fadeIn(500);
      button.attr("aria-expanded", !expanded);
      button.find('.icon_collapse').toggleClass("hidden", !expanded);
    };
  }