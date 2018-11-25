$(document).ready(function(){
  // $.mask.definitions['9']='';
  $.mask.definitions['9']='[0-9]';
  $.mask.definitions['f']='[A-B, a-b]';
  $.mask.definitions['b']='[A-Z, a-z, /.]';

  // $("#phone").mask("+998 (dd) ddd-dd-dd");
  $('#id').mask("U9999999");
  $('#locker').mask("f9999");
  // $('#mail').mask("b@student.inha.uz");

});
