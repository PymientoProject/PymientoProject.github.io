
function getScript(source, callback) {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;
    prior.parentNode.insertBefore(script, prior);

    script.onload = script.onreadystatechange = function( _, isAbort ) {
        if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if(!isAbort) { if(callback) callback(); }
        }
    };

    script.src = source;
}

function doMasonry(cw){

		cw = (typeof cw !== "number")?370:cw;

        var container = document.querySelector('#container');
		var msnry = new Masonry( container, {
		  // options
		  columnWidth: cw,
		  itemSelector: '.brick',
		  isFitWidth: true
		});


}




document.addEventListener("DOMContentLoaded", function(event) { 

	href = window.location.href

	refered = {}

	if(href.match(/8888/)==null){
		url_base = 	"/";
	}else{
		count = (href.match(/\//g) || []).length;
		url_base = count==4?"./":"../".repeat(count-4); 
	}


	getScript(url_base+"js/jquery.min.js", function(){



		$.getScript(url_base+"js/customized-mmd.js", function(){

			$.getScript(url_base+"js/masonry.min.js", function(){

				$.getScript(url_base+"js/imagesloaded.min.js", function(){

					//myDataFile = window.location.pathname.split('/');
					myDataFile = "data.md?r="+Math.random();

					$.ajax({
			            url : myDataFile,
			            success : function ( mydata ) {

			            	$("<link/>", { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Maitree:400,200" }).appendTo("head");
			            	$("<link/>", { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Oswald:400,700,300" }).appendTo("head");
			            	$("<link/>", { rel: "stylesheet", type: "text/css", href: url_base+"css/styles.css?r="+Math.random() }).appendTo("head");
			            	

			            	logo = "<div class='logo'><a href='"+url_base+"'><img src='"+url_base+"img/logo-triangle.png' id='logo' /></a></div>"
			            	menu = "";
			            	menu2 = "";

			            	

			            	$.getJSON( url_base+"structure.json?r="+Math.random(), function( data ) {

								$.each( data.pages, function( key, val ) {
									if(menu!='') menu += "";
							  		menu += "<a href='"+url_base+val.url+"'>" +  val.title +"</a>";

							  		
							  		
							  		$.each( val.pages, function( key2, val2 ) {
							  			if(RegExp(val.url+"\/$","").test(href) && val2.published)
							  				// CARGA LOS SUBMENUS
											menu2 
											+= (val2.link?"<a href='"+url_base+val2.url+"'>":"")
											+ "<div class='brick'><span>" 
											+  val2.title 
											+ "</span><img src='"+ url_base +  val2.image +"' />"
											+ (val2.link?"</a>":"") 
											+ ""+val2.introduction+""
											+"</div>";

										if(val2.id != null){
											
											refered[val2.id] = [val2.title, val2.image, val2.url]
										}

								  	});

							  	});

							  	menu = "<div class='menu'>"+ menu + "</div>";
							  	if(menu2) menu2 = "</div><div id='container'>"+ menu2 + "</div><div style='float:left;clear:both;'>";

				            	
				            	markdownData = mmd(mydata);
				            	title = markdownData.match(/<h1>(.*)<\/h1>/g);
				            	title = title[0].replace("<h1>","").replace("</h1>","");

				            	regexAuthInfo = /\(!(.*)\)/g;
				            	
				            	while((match = regexAuthInfo.exec(markdownData))!=null){

				            		//console.log(match[1])

				            		if(refered[match[1]]!=null){
				            			
				            			 
				            			
				            			vRegExp = RegExp("\\(!"+match[1]+"\\)","g");
				            			markdownData = markdownData.replace(vRegExp, function(b){
				            				ref_name = refered[match[1]][0];
				            				ref_img =  refered[match[1]][1];
				            				ref_url =  refered[match[1]][2];

				            				ahref = "<a href='../../"+ref_url+"'>";


				            				return ahref + "<div  class='reference'><img src='../../"+ref_img+"'/></a>Aportaci&oacute;n de:<br>"+ahref+ref_name+"</a></div>";
				            			})
				            			
				            		}
				            		
				            	}
				            	markdownData = markdownData.replace(/<pre><code> /g,'<pre><code>');
				            	markdownData = markdownData.replace(/\n\\n/g,'\n');

				            	
				            	 
				            	console.log(markdownData)
				            	
				            	document.title = "Pymiento // " + title;
				            	$('body').append(logo+'<div class="content">'+menu+markdownData+menu2+'</div>');

				            	logo_number = Math.round(Math.random() * 3) 
				            	

								//$('#logo').attr("src", url_base+'img/logo'+logo_number+'.png');
								$('.logo').css("background-image", 'url('+url_base+'img/bg'+logo_number+'.jpg)');
								
				            	if(menu2){
					            	doMasonry();

									$('#container').imagesLoaded( function() {
										doMasonry();
										$("#loader").fadeOut("slow", function(){
											$('#container').css("visibility","visible");
										})
										
									});
								}

			            	});
						}
			        });
				});
			});
		});
	});

});
