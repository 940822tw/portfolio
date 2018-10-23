var info = "https://spreadsheets.google.com/feeds/cells/1tBNVHiCS2VqN41eHYivf5qVUecOCDRpCv80mY6bcUTs/2/public/basic?alt=json-in-script&callback=?";



function infoDisplay(){
  $.getJSON(info,function(data){
    var entry=data.feed.entry;

    function append(obj, num){
      var objid = "#"+obj
      $(objid).append(entry[num].content.$t);

    }

    append("introduce article",2);
    append("experience article",6);
    append("history article",11);
    append("skill article",14);
    append("edu article",22);
    append("pro article",30);
    // append("research",16);
    append("contact article",34);
  })};
infoDisplay();
