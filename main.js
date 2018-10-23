var main = "https://spreadsheets.google.com/feeds/cells/1tBNVHiCS2VqN41eHYivf5qVUecOCDRpCv80mY6bcUTs/1/public/basic?alt=json-in-script&callback=?";
var mainImage=[];

function mainImage(num, format, width){
  this.format ="."+format;
  this.url = "img/main"+num+format;
  this.width = width;
}

function mainDisplay(){
  $.getJSON(main,function(data){
    var entry=data.feed.entry;
    $("#mainEng").text(" ");
    $("#mainEng").append("<span onclick='invis(&quot;#mainContainer&quot;)'>"+entry[1].content.$t)+"</span>";
    $("#mainKor").text(" ");
    $("#mainKor").append(entry[2].content.$t);


  })};
mainDisplay();
