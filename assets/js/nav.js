$('a').each(function(_, a) {
  if (a.href == document.location.href) {
    $(a).addClass('active');
  }
});
