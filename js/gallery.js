var getDimensions = function (item) {
  var img = new Image();
  img.src = item.css('background-image').replace(/url\(|\)$|"/ig, '');
  return [img.width,img.height]
};

$(window).ready(function() {
  // I divide each image creation segment into little functions to make copypasting easier
  loadImages("congo1", [
    "https://www.flickr.com/photos/111890936@N07/11439186996",
    "http://sfbayview.com/tag/first-congo-war-in-1996/",
    "https://www.ghanaclass.com/how-the-first-and-second-congo-war-came-about/",
    "http://fun.putidea.info/2016/07/nidokidos-16-deadliest-wars-in-human.html",
    "http://nebuchadnezzarwoollyd.blogspot.com/2007_03_01_archive.html",
    "https://sunnyntayombya.wordpress.com/tag/rwanda-patriotic-front/"
  ]);
  loadImages("congo2", [
    "https://www.ghanaclass.com/how-the-first-and-second-congo-war-came-about/",
    "https://2ndperiodaphug.wordpress.com/2015/02/16/the-2nd-congo-war-spencer-buckner/",
    "http://www.rechargebiomedical.com/honoring-those-who-gave-their-lives/",
    "http://www.richardcotman.com/etnobofin/tag/congo/",
    "http://neoncobra.blogspot.com/2008/12/second-congo-war.html",
    "https://www.hrw.org/news/2013/02/05/dr-congo-war-crimes-m23-congolese-army",
    "https://neoncobra.blogspot.com/2008/12/second-congo-war.html"
  ]);
  loadImages("rwanda", [
    "https://endgenocide.org/learn/past-genocides/the-rwandan-genocide/",
    "https://creofire.com/the-rwandan-genocide-i/",
    "http://www.bbc.com/news/world-africa-26875506",
    "https://www.pinterest.com/explore/rwanda-genocide/",
    "http://proof.nationalgeographic.com/2014/03/31/revisiting-rwandan-genocide/",
    "http://kbctv.co.ke/blog/2016/09/28/us-deports-rwanda-genocide-suspect/"
  ])

})



function loadImages(id, href) {
  var temp = `<a href='{href}'><div class='cell' style='width:{width}px; height: {height}px; background-image: url(img/gallery/${id}-{index}.jpg)'></div></a>`;
  var w = 1, html = '', limitItem = href.length;
  for (var i = 0; i < limitItem; i++) {
    w = 200 +  200 * Math.random() << 0;
    html += temp.replace(/\{height\}/g, 200).replace(/\{width\}/g, w).replace("{index}", i).replace("{href}", href[i]);
  }
  $("#" + id).html(html);
  var wall = new Freewall("#" + id);
  wall.reset({
    selector: '.cell',
    animate: true,
    cellW: 20,
    cellH: 200,
    onResize: function() {
      wall.fitWidth();
    }
  });
  wall.fitWidth();
  // for scroll bar appear;
  $(window).trigger("resize");
}
