
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
	//outstanding = []
	count = (href.match(/\//g) || []).length;

	if(href.match(/8888/)==null){
		url_base = 	"/";
	}else{
		url_base = count==4?"./":"../".repeat(count-4); 
	}

	console.log(count)
	console.log(url_base)


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
			            	//$("<link/>", { rel: "stylesheet", type: "text/css", href: "http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" }).appendTo("head");

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

										if(val2.id != null)
											refered[val2.id] = [val2.title, val2.image, val2.url]

										//if(val2.outstanding != null && val2.outstanding)
										//	outstanding.push([val2.title, val2.introduction, val2.image, val2.url])
									

								  	});

							  	});

							  	//console.log(outstanding)

							  	menu = "<div class='menu'>"+ menu + "</div>";
							  	if(menu2) menu2 = "</div><div id='container'>"+ menu2 + "</div><div style='float:left;clear:both;'>";

				            	
				            	markdownData = mmd(mydata);
				            	title = markdownData.match(/<h1>(.*)<\/h1>/g);
				            	title = title[0].replace("<h1>","").replace("</h1>","");

				            	regexAuthInfo = /\(!(\D+)\)/g;
				            	
				            	while((match = regexAuthInfo.exec(markdownData))!=null){

				            		//console.log(match[1])

				            		if(refered[match[1]]!=null){
				            			
				            			 
				            			
				            			vRegExp = RegExp("\\(!"+match[1]+"\\)","g");
				            			markdownData = markdownData.replace(vRegExp, function(b){
				            				ref_name = refered[match[1]][0];
				            				ref_img =  refered[match[1]][1];
				            				ref_url =  refered[match[1]][2];

				            				ahref = "<a href='../../"+ref_url+"'>";


				            				return "<div  class='reference'>"+ahref+"<img src='../../"+ref_img+"'/></a>Aportaci&oacute;n de:<br>"+ahref+ref_name+"</a></div>";
				            			})
				            			
				            		}
				            		
				            	}
				            	markdownData = markdownData.replace(/<pre><code> /g,'<pre><code>');
				            	markdownData = markdownData.replace(/\n\\n/g,'\n');

				            	/*
				            	if(outstanding.length > 0)
				            		markdownData = markdownData.replace(/\(!outstanding\)/, function(b){
			            				
			            			outs = ''

		            				for(i=0;i<outstanding.length;i++){
		            					outs_title = outstanding[i][0];
			            				outs_intro = outstanding[i][1];
			            				outs_image = outstanding[i][2];
			            				outs_url =   outstanding[i][3];

			            				ahref = "<a href='"+outs_url+"'>";
			            				outs += "<div  class='bricks outstanding'>"+ahref+"<img src='"+outs_image+"'/></a>"+ahref+outs_title+"</a><br>"+outs_intro+"</div>";
		            				}
		            				

		            				


		            				return outs
			            			})
				            	*/

				            	 
				            	//console.log(markdownData)
				            	
				            	document.title = "Pymiento | " + title;

				            	
				            	

				            	content = (url_base!="./" && url_base!="/")?'<div class="content">'+menu+markdownData+menu2+'</div>':'';
				            	$('body').append(logo+content);

				            	logo_number = Math.round(Math.random() * 3) 
				            	

								
								$('.logo').css("background-image", 'url('+url_base+'img/bg'+logo_number+'.jpg)');
								
								if(url_base=="./" || url_base=="/"){

									$('.logo').append(menu);
									$('.menu').css("margin-top","100px");
									$('.menu a').css("background","#ffffff");
									$('.menu a').css("color","#000000");

									$('.menu a').mouseenter(function() {

										$(this).css("background","#000000");
										$(this).css("color","#ffffff");
									}).mouseleave(function() {
									    $(this).css("background","#ffffff");
										$(this).css("color","#000000");
									});

									$('.logo').css("height","1500px");
								}

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
