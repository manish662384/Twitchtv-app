
window.onload = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'twitchtv.json', true);
	
	xhr.onload = function(){
		
		if(this.status == 200){
					
			var streamers = JSON.parse(this.responseText);
			
			var output = '';
			for (var i in streamers) {		
				
				if(streamers[i].stream != null){

					output +=
					'<div class="channel divLive">' +
					'<span class="inner1"><img src="'+ streamers[i].stream.logo+ '" alt="channel-logo"></span>' +
					'<span class="inner2"><h4>'+ streamers[i].stream.display_name+'</h4></span>' +					
					'<span class="inner3"><span class="iconText"><i class="fas fa-rss"></i>' +
					'<em>Live</em></span>' +
					'<h4 class="statusLength">'+streamers[i].stream.status+'</h4>' +
					'<a class="channel-url" href="'+streamers[i].stream.url+'" target="_blank">'+"Visit Channel"+'</a></span>' +
					'</div>';
				} else if(streamers[i].stream === null){
										
					output +=
					'<div class="channel divOffline">' +
					'<span class="inner1"><h4>'+"Logo"+'<br>'+ "Unavailable"+'</h4></span>' +
					'<span class="inner2"><h4>'+ streamers[i].display_name+'</h4></span>' +					
					'<span class="inner3"><span class="iconText"><i class="fas fa-minus-circle"></i>'+
					'<em>Offline</em></span></span>' +
					'</div>';
				}				
			}

			document.getElementById('channels').innerHTML = output;	

		}
	}

	xhr.send();
}


/* -----------------Buttons to Toggle between Live and Offline channels---------------------- */
document.getElementById('buttonLive').addEventListener('click', loadLiveChannels);

function loadLiveChannels(){

	var divOffline = document.getElementsByClassName('divOffline');
	var divLive = document.getElementsByClassName('divLive');

	for (var i = 0; i < divOffline.length; i++) {
		divOffline[i].style.display = "none";
	}
	for (var i = 0; i < divLive.length; i++) {
		divLive[i].style.display = "flex";
	}
}

document.getElementById('buttonOffline').addEventListener('click', loadOfflineChannels);

function loadOfflineChannels(){

	var divLive = document.getElementsByClassName('divLive');
	var divOffline = document.getElementsByClassName('divOffline');

	for (var i = 0; i < divLive.length; i++) {
		divLive[i].style.display = "none";
	}
	for (var i = 0; i < divOffline.length; i++) {
		divOffline[i].style.display = "flex";
	}
}

document.getElementById('buttonAll').addEventListener('click', loadAllChannels);

function loadAllChannels(){

	var channel = document.getElementsByClassName('channel');
	
	for (var i = 0; i < channel.length; i++) {
		channel[i].style.display = "flex";
	}	
}