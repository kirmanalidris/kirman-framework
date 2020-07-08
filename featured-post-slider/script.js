
// Written by @Kirmanalidris
// Do NOT remove credits
var showpostthumbnails=!0; var showpostsummary=!0; var random_posts=!1; var numchars = 12; var numposts = 4; function showgalleryposts(json) {
  var numPosts = json.feed.openSearch$totalResults.$t; var indexPosts = new Array(); document.write(''); for (var i = 0; i < numPosts; ++i) {
    indexPosts[i] = i
  }
  if (random_posts==!0) {
    indexPosts.sort(function() {
      return 0.5-Math.random()})}
  if (numposts > numPosts) {
    numposts = numPosts
  }
  for (i = 0; i < numposts; ++i) {
    var entry = json.feed.entry[indexPosts[i]]; var posttitle = entry.title.$t;
    if (typeof cate == 'undefined') {
      var cate = "uncategorised"
    } else {
      var cate = json.feed.entry[i].category[0].term
    }
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href; break
      }}
    if ("content" in entry) {
      var postcontent = entry.content.$t
    }
    s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"", a); c = s.indexOf("\"", b+5); d = s.substr(b+5, c-b-5); if ((a!=-1) && (b!=-1) && (c!=-1) && (d != "")) {
      var thumburl = d
    } else var thumburl = '//placehold.it/1000x300'; document.write('<div class="kirman_feed_item"><a href="'+posturl+'"><img class="kirman_feed_image lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="'+thumburl+'"/></a>'); document.write('<div class="kirman_feed_detail">'); document.write('<p class="kirman_feed_label">'+cate+'</p>'); document.write('<h2 class="kirman_feed_title">'+posttitle+'</h2>'); var re = /<\S[^>]*>/g; postcontent = postcontent.replace(re, ""); if (showpostsummary==!0) {
      if (postcontent.length < numchars) {
        document.write('<p class="kirman_feed_snippet">'+postcontent+'... </p>')} else {
        postcontent = postcontent.substring(0, numchars); var quoteEnd = postcontent.lastIndexOf(" "); postcontentl = postcontent.substring(0, quoteEnd); document.write('<p class="kirman_feed_snippet">'+postcontent+'... <br/> Rp gratis</p>')}
     document.write('<a class="kirman_feed_selengkapnya" href="'+posturl+'">Beli</a></div>')}
    document.write('</div>')}
  }
//]]>
  </script>
<script>
//<![CDATA[
// Written by @Kirmanalidris
// Do NOT remove credits
var showpostthumbnails=!0; var showpostsummary=!0; var random_posts=!1; var numchars = 12; var numposts = 4; function showgalleryposts(json) {
  var numPosts = json.feed.openSearch$totalResults.$t; var indexPosts = new Array(); document.write(''); for (var i = 0; i < numPosts; ++i) {
    indexPosts[i] = i
  }
  if (random_posts==!0) {
    indexPosts.sort(function() {
      return 0.5-Math.random()})}
  if (numposts > numPosts) {
    numposts = numPosts
  }
  for (i = 0; i < numposts; ++i) {
    var entry = json.feed.entry[indexPosts[i]]; var posttitle = entry.title.$t;
    if (typeof cate == 'undefined') {
      var cate = "uncategorised"
    } else {
      var cate = json.feed.entry[i].category[0].term
    }
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href; break
      }}
    if ("content" in entry) {
      var postcontent = entry.content.$t
    }
    s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"", a); c = s.indexOf("\"", b+5); d = s.substr(b+5, c-b-5); if ((a!=-1) && (b!=-1) && (c!=-1) && (d != "")) {
      var thumburl = d
    } else var thumburl = '//placehold.it/1000x300'; document.write('<div class="kirman_feed_item"><a href="'+posturl+'"><img class="kirman_feed_image lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="'+thumburl+'"/></a>'); document.write('<div class="kirman_feed_detail">'); document.write('<p class="kirman_feed_label">'+cate+'</p>'); document.write('<h2 class="kirman_feed_title">'+posttitle+'</h2>'); var re = /<\S[^>]*>/g; postcontent = postcontent.replace(re, ""); if (showpostsummary==!0) {
      if (postcontent.length < numchars) {
        document.write('<p class="kirman_feed_snippet">'+postcontent+'... </p>')} else {
        postcontent = postcontent.substring(0, numchars); var quoteEnd = postcontent.lastIndexOf(" "); postcontentl = postcontent.substring(0, quoteEnd); document.write('<p class="kirman_feed_snippet">'+postcontent+'... <br/> Rp gratis</p>')}
     document.write('<a class="kirman_feed_selengkapnya" href="'+posturl+'">Beli</a></div>')}
    document.write('</div>')}
  }
