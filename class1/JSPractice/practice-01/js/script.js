function setMenu(_menu) {
    console.log(_menu);
    var menus = document.querySelectorAll('nav li');
    menus.forEach(function (menu) {
        menu.classList.remove('on');
    });
   document.querySelector('nav li.' + _menu).classList.add('on');

   document.querySelector('main').className = _menu;
}

function setDescLength () {
    document.querySelector('span.descLength').innerHTML
    = document.querySelector('input.description').value.length + "/20";
}

function showMyInfo () {
   document.querySelector("#myInfoId").innerHTML = my_info.id;
   document.querySelector("#myInfoUserName").innerHTML = my_info['user_name'];
   document.querySelector("#ip-intro").value = my_info.introduction;
   document.querySelector("#sp-intro").innerHTML = my_info.introduction;
   document.querySelector("#myinfo input[type=radio][value=" + my_info.as + "]")
   .checked = true;
   document.querySelectorAll("#myinfo input[type=checkbox]").
   forEach(function(checkbox) {
    checkbox.checked = false;
   });
 
   my_info.interest.forEach(function(interest) {
    document.querySelector("#myinfo input[type=checkbox][value=" + interest +"]").
    checked = true;
   });
}

function setEditMyInfo (on) {
   document.querySelector("#myinfo > div").className = on ? 'edit' : 'non-edit';
   document.querySelectorAll("#myinfo input").forEach(function(Input) {
    Input.disabled = !on;
   })
   showMyInfo();
}

function updateMyInfo () {
    my_info.introduction = document.querySelector("#ip-intro").value;
    my_info.as = document.querySelector("#myinfo input[type=radio]:checked").value;

    var interestS = [];
    document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (interest) {
     interestS.push(interest.value);
    })
    my_info.interest = interestS;
    
    setEditMyInfo(false);
    showMyInfo();
}


var sorts = {
    recent: function(a, b) { return (a.idx > b.idx) ? -1 : 1 },
    like: function(a, b) { return (a.likes > b.likes) ? -1 : 1 }
};

var sort = sorts.recent;

var filters = {
    all: function (it) { return true; },
    mine: function (it) { return it.user_id === my_info.id; },
    like: function (it) { return my_info.like.indexOf(it.idx) > -1; },
    follow: function (it) { return my_info.follow.indexOf(it.user_id) > -1; }
};

var filter = filters.all;

function setSort(_sort) {
  var sortButtons = document.querySelectorAll("#sorts li");
  sortButtons.forEach(function (sortButton) {
    sortButton.classList.remove('on');
  })
  document.querySelector("#sorts li." + _sort).classList.add("on");

  sort = sorts[_sort];
  showPhotos();
};

function setFilter(_filter) {
    var filterButtons = document.querySelectorAll("#filters li");
    filterButtons.forEach(function(fButton){
        fButton.classList.remove("on")
    });
    document.querySelector("#filters li." + _filter).classList.add("on");

    filter = filters[_filter]
    showPhotos();
}


function showPhotos () {

    var existingNodes = document.querySelectorAll("article:not(.hidden)");
        
    existingNodes.forEach(function(ExistingNode){
        ExistingNode.remove();
    }); 

    var gallery = document.querySelector("#gallery");

    var filtered = photos.filter(filter);
    filtered.sort(sort);

    filtered.forEach(function(PHOTO){

        var photoNode = document.querySelector("article.hidden").cloneNode(true);
        photoNode.classList.remove("hidden");
        photoNode.querySelector(".author").innerHTML = PHOTO.user_name;
        photoNode.querySelector(".desc").innerHTML = PHOTO.description;
        photoNode.querySelector(".like").innerHTML = PHOTO.likes;
        photoNode.querySelector(".like").addEventListener("click", function () {toggleLike(PHOTO.idx)});

        if (my_info.like.indexOf(PHOTO.idx) > -1) {
            photoNode.querySelector(".like").classList.add("on");
        }

        photoNode.querySelector(".photo").style.backgroundImage = 
        "url('./img/photo/" + PHOTO.file_name + "')"

        gallery.append(photoNode);
    })

    
}

function toggleLike (idx) {
  if (my_info.like.indexOf(idx) === -1) {
    my_info.like.push(idx);
    for (var i = 0; i < photos.length; i++) {
        if (photos[i].idx === idx) {
            photos[i].likes++;
            break;
        }
    }
   }
   else {
    my_info.like = my_info.like.filter(function(p) {
      return p !== idx;
    });
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
          photos[i].likes--;
      break;
      }}
    }

  showPhotos();
}

function init () {
    showMyInfo();
    showPhotos();
}