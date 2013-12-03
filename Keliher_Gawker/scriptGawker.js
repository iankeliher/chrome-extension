//simplified Gawker

//display: none;	post-wrapper.js_post-wrapper.wide.postlist-dense.js_promoted
//display: none;	ad-unit.ad-970x90.default.desktop.bbg
//display: none;	ad-container.initialized
//display: none;	billboard-container
//display: none;	sidebar-container.js_sidebar-container
//display: none;	ad-container.ad300x-placeholder.js-ad300x-placeholder.js-ad300x-wrapper.js_sidebar-element.h250
//width: 70%; float: left; margin-left: 50px;	eight.columns
//display: none;	compose button		ul.share-toolbar.proxima.hide-for-small
//div.twelve.columns.package-wrapper.recommended-post

//helpful tag	p.first-text (lead-in)
//placement of sidebar		four.columns.sidebar-module.hide-for-small		(float right; display: none)
//needs to follow sidebar	sidebar-content.js_sidebar						(float right; display: none)


//not using these anymore
//control sidebar size		row.sidebar-item.js_sidebar-element
//make width: 200px		sidebar-content.js_sidebar
//make width: 200px		just-headlines
//only show first 4		row.sidebar-item.js_sidebar-element		(children of just-headlines)


//begin

$(document).ready(function(){

		$("div.ad-unit.ad-970x90.default.desktop.bbg, div.ad-container.initialized, ul.share-toolbar.proxima.hide-for-small, div.billboard-container, div.sidebar-container.js_sidebar-container, div.four.columns.sidebar-module.hide-for-small, div.ad-container.ad300x-placeholder.js-ad300x-placeholder.js-ad300x-wrapper.js_sidebar-element.h250").addClass("hide");
		
		$("div.four.columns.sidebar-module.hide-for-small, div.sidebar-content.js_sidebar").addClass("moveRight");
		
		$("div.eight.columns").attr("id", "bodyResize");

        $("div.twelve.columns.package-wrapper.recommended-post p.first-text, div.twelve.columns.package-wrapper.recommended-post h1, div.twelve.columns.package-wrapper.recommended-post a.inset-headline proxima.strong").empty();
        
        $("div.twelve.columns.package-wrapper.recommended-post p.first-text").prepend("<p>Ads are dumb. I like pictures of cats better.</p>");
                
        $("div.twelve.columns.package-wrapper.recommended-post h1").prepend("<h1>Anti-cat-italism<h1>");

		//replaces sponsored posts's pics w/ kittens b/c why not
        $("div.twelve.columns.package-wrapper.recommended-post img").each(function(index, image) {
        
                var width = $(image).attr("width");
                var height = $(image).attr("height");
                
                $(image).attr({
                        "src":"http://placekitten.com/"+width+"/"+height,
                        "width":width, 
                        "height":height
                });
        
        });


        console.log("done");
});