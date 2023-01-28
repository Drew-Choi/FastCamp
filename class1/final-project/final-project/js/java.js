function setMenu(_menu) {
    var menus = document.querySelectorAll('nav li');
    menus.forEach(function(M){
        menus.classList.remove('on');
    });
    document.querySelector('nav li.' + _menu).classList.add('on');

    document.querySelector('main').className = _menu;
}

function setSideMenu (_sidemenu) {
    var SideBarMenus = document.querySelectorAll("nav li");
    SideBarMenus.forEach(function (a) {
        a.classList.remove("on");
    });
    document.querySelector("nav li." + _sidemenu).classList.add("on");

    document.querySelector('main').className = _sidemenu;
};


function showVideos () {

 var existingNode = document.querySelectorAll("#home article:not(.hidden");

 existingNode.forEach(function(EB){
    EB.remove();
 });

 var HOME = document.querySelector("#home"); 

 var Filtered = videosdata.filter(FILTER1);
 Filtered.sort(sort);

   Filtered.forEach(function(videosD) {
     var videoNode = document.querySelector("#home article.hidden").cloneNode(true);
     videoNode.classList.remove("hidden");
     videoNode.querySelector(".thumbnail").style.backgroundImage = "url('./photos/" + videosD.file_name + "')"
     videoNode.querySelector(".profile").style.backgroundImage = "url('./photos/" + videosD.profile + "')"
     videoNode.querySelector(".title").innerHTML = videosD.content_title;
     videoNode.querySelector(".userId").innerHTML = videosD.user_id;
     HOME.append(videoNode);

 });
};


function showVideos2 () {

 var existingNode = document.querySelectorAll("#history article:not(.hidden");

 existingNode.forEach(function(EB){
    EB.remove();
 });
    var HISTORY = document.querySelector("#history"); 
   
    var Filtered = videosdata.filter(FILTER2);
    Filtered.sort(sort);
   
      Filtered.forEach(function(v) {
        var videoNode = document.querySelector("#history article.hidden").cloneNode(true);
        videoNode.classList.remove("hidden");
        videoNode.querySelector(".thumbnail").style.backgroundImage = "url('./photos/" + v.file_name + "')"
        videoNode.querySelector(".profile").style.backgroundImage = "url('./photos/" + v.profile + "')"
        videoNode.querySelector(".title").innerHTML = v.content_title;
        videoNode.querySelector(".userId").innerHTML = v.user_id;
        HISTORY.append(videoNode);
   
    });
   };

   function showVideos3 () {

    var existingNode = document.querySelectorAll("#descrip article:not(.hidden");
   
    existingNode.forEach(function(EB){
       EB.remove();
    });
       var DESCRIP = document.querySelector("#descrip"); 
      
       var Filtered = videosdata.filter(FILTER3);
       Filtered.sort(sort);
      
         Filtered.forEach(function(ve) {
           var videoNode = document.querySelector("#history article.hidden").cloneNode(true);
           videoNode.classList.remove("hidden");
           videoNode.querySelector(".thumbnail").style.backgroundImage = "url('./photos/" + ve.file_name + "')"
           videoNode.querySelector(".profile").style.backgroundImage = "url('./photos/" + ve.profile + "')"
           videoNode.querySelector(".title").innerHTML = ve.content_title;
           videoNode.querySelector(".userId").innerHTML = ve.user_id;
           DESCRIP.append(videoNode);
      
       });
      };



function setFilter(_filter) {
    var filterButtons = document.querySelectorAll(".FILTERS li");
    filterButtons.forEach(function(fB){
        fB.classList.remove("filter-item--active")
    });
    document.querySelector(".FILTERS li." + _filter).classList.add("filter-item--active");
    
    FILTER1 = filters[_filter]
    showVideos();
}


function init () {
    showVideos ();
    showVideos2 ();
    showVideos3 ();
    
};

var sort = function(a, b) { return (a.idx > b.idx) ? -1 : 1 };

var filters = {
    all: function (it) { return true; },
    history: function (it) { return filterdata.history1.indexOf(it.idx) > -1; },
    descript: function (it) { return filterdata.descript1.indexOf(it.idx) > -1; },
    games: function (it) { return it.genre === filterdata.genre1 },
    musics: function (it) { return it.genre === filterdata.genre2},
    lives: function (it) { return it.genre === filterdata.genre3},
};

var FILTER1 = filters.all;
var FILTER2 = filters.history;
var FILTER3 = filters.descript;