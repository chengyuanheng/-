$(function() {
 $("#signature").jSignature();
})

function fetch_data(){
  generate_record()
  var data = $("#signature").jSignature("getData", "svg");
  var paths = $(data[1]).find("path")
  $('#signature').jSignature('reset');
  $('#svg').empty().append(paths);
  new Vivus('svg', {type: 'oneByOne',duration: 500});
}

function reset_data(){
  $('#signature').jSignature('reset');
}

function review(){
  new Vivus('svg', {type: 'oneByOne',duration: 500});
}


function generate_record(){
  var datapair = $("#signature").jSignature("getData", "svgbase64")
  var i = new Image()
  i.src = "data:" + datapair[0] + "," + datapair[1]
  $(i).appendTo($("#record"))
}
