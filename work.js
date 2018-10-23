var work = "https://spreadsheets.google.com/feeds/cells/1tBNVHiCS2VqN41eHYivf5qVUecOCDRpCv80mY6bcUTs/4/public/basic?alt=json-in-script&callback=?";
var worksArray = [];
var currentWork = null;

function Work(index, date, titleEng, category, descEng, descKor, directory, imageNum) {
  this.index = index;
  this.date = date;
  this.year = date.substring(0, 4);
  this.titleEng = titleEng;
  this.category = category;
  this.descEng = descEng;
  this.descKor = descKor;
  this.directory = directory;
  this.imageNum = imageNum; //8
  this.format = [];
  this.url = [];

}

function workShow(num) {
  $(".template").remove();
  if (currentWork == num) {
    currentWork = null;
    var destination = "#workEngBox-" + num;
    $(destination).remove();
    var destination = "#workKorBox-" + num;
    $(destination).remove();
    return;
  }
  var destination = "#wrapper"
  var html =""
  html += "<div id='workEngBox-"+num+"' class='template container'>"
  html += "<div class='header draggable'><span>"+worksArray[num].titleEng+"<span><img src='img/close.svg' onclick='$(&quot;.template&quot;).remove();' class='close'></div>"
  html += "<div class='article'>"
  html += "<span class='category'>"+worksArray[num].category+"</span>"
  html+="<img class='thumbnail' src='img/"+worksArray[num].url[0]+"'/>"
  html += worksArray[num].descEng;
  for (var i = 1; i < worksArray[num].imageNum; i++) {
    html+="<img class='thumbnail' src='img/"+worksArray[num].url[i]+"'/>"

  }
  html += "</div>"
  html += "</div>"
  currentWork = num;
  $(destination).append(html)
}


function workDisplay() {
  $.getJSON(work, function(data) {
    var entry = data.feed.entry;
    imageLength = entry[1].content.$t;
    for (var i = 29; i < entry[2].content.$t * 1 + 20; i += 8) {
      worksArray[eval(entry[i].content.$t * 1 - 1)] = new Work(eval(entry[i].content.$t * 1), entry[i + 1].content.$t, entry[i + 2].content.$t, entry[i + 3].content.$t, entry[i + 4].content.$t, entry[i + 5].content.$t, entry[i + 6].content.$t, entry[i + 7].content.$t);
      for (var j = 0; j < entry[i + 7].content.$t * 2; j += 2) {
        worksArray[eval(entry[i].content.$t * 1 - 1)].format.push(entry[i + 8 + j].content.$t);
        worksArray[eval(entry[i].content.$t * 1 - 1)].url.push(entry[i + 9 + j].content.$t);
      }
      i += entry[i + 7].content.$t * 2;
    }

    function workList() {
      for (var i = 0; i < imageLength; i++) {
        html = ""
        html += "<span id='workEng-" + i + "' class='workTitle' onclick='workShow(" + i + ")'>"
        html += worksArray[i].titleEng;
        html += "</span><br>"
        $("#work article").append(html);
        }
    }
    workList();
  })
};


workDisplay();
