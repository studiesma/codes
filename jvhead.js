<script type='text/javascript'>
//<![CDATA[
//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://fonts.googleapis.com/earlyaccess/droidarabicnaskh.css");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/earlyaccess/droidarabickufi.css");loadCSS("");loadCSS("https://fonts.googleapis.com/css?family=Oswald:400,300,700|Electrolize");
//]]>
</script>
<script type='text/javascript'>
$(function() {$(&quot;.tabs-1&quot;).mtabs();});
</script>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<script type='text/javascript'>
snippet_count = 150;
//<![CDATA[
function removeHtmlTag(n,e){if(-1!=n.indexOf("<")){for(var t=n.split("<"),i=0;i<t.length;i++)-1!=t[i].indexOf(">")&&(t[i]=t[i].substring(t[i].indexOf(">")+1,t[i].length));n=t.join("")}for(e=e<n.length-1?e:n.length-2;" "!=n.charAt(e-1)&&-1!=n.indexOf(" ",e);)e++;return n=n.substring(0,e-1),n+"..."}function createSnippet(n){var e=document.getElementById(n),t=snippet_count,i='<div class="snippets">'+removeHtmlTag(e.innerHTML,t)+"</div>";e.innerHTML=i}
// Post Thumbnail
function bp_thumbnail_resize(image_url,post_title){var image_width=220;var image_height=160;image_tag='<img width="'+image_width+'" height="'+image_height+'" src="'+image_url.replace('/s72-c/','/w'+image_width+'-h'+image_height+'-c/')+'" alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'"/>';if(post_title!="") return image_tag; else return ""; }
//]]>
</script>
</b:if>
</b:if>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>

</b:if>
</b:if>



<script src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js'/>
<script>
jQuery(document).ready(function($) {
    $(&quot;#tabs&quot;).tabs();
});
</script>





