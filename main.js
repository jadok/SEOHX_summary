function form_summary() {
  $('body > div.summary_personnalise').remove();
  var sumarry = $('<div class="summary_personnalise" />').css({
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': "100%",
    'height': "100%",
    'background': "#000",
    'color': 'orange',
    'margin': 'auto'
  });

  var css_rule = "";
  for (var i = 0; i < 7; i++) { //Does not expect h7
    css_rule += "h" + i + "{margin-left:" + (i * 10) + "}";
  }
  var my_styling = $('<style/>')
    .text(css_rule);
  var hx = $('h1, h2, h3, h4, h5, h6');
  console.log(hx);
  $.each(hx, function (i, e) {
    var tmp = $("<" + e.tagName + "/>")
      .addClass('custom_sum')
      .text("#" + e.id + "." + e.classList.toString() + "->" + e.innerText);
    sumarry.append(tmp);
  });
  sumarry.append(my_styling);
  $('body').append(sumarry);
}