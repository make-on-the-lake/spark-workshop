---
---
setTimeout(function() {

  {% include steps.js %}

  var currentStepIndex = steps.indexOf(document.location.pathname);

  if (currentStepIndex > 0) {
    $('#previous-step-link').attr('href', steps[currentStepIndex - 1]);
    $('#previous-step-link').show();
  } else {

  }

  if (currentStepIndex < steps.length - 1) {
    $('#next-step-link').attr('href', steps[currentStepIndex + 1]);
    $('#next-step-link').show();
  } else {

  }

});
