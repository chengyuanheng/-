$(function() {
 $("#signature").jSignature();
 var mySVG = $('#signSvg').drawsvg();
 mySVG.drawsvg('animate');
})

function fetch_data(){
  generate_record()
  var data = $("#signature").jSignature("getData", "svg");
  $('#show').empty().append(data[1]).drawsvg();
  var mySVG = $('svg').drawsvg();
  mySVG.drawsvg('animate');
  $('#signature').jSignature('reset');
}

function generate_record(){
  var datapair = $("#signature").jSignature("getData", "svgbase64")
  var i = new Image()
  i.src = "data:" + datapair[0] + "," + datapair[1]
  $(i).appendTo($("#record"))
}
