
window.onload = function(){

	var usernames = ["ESL_SC2", "cretetion", "freecodecamp", "storbeck", "OgamingSC2", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var streams = [];
	var channels = [];
	var streamsList;
	var channelsList;
		
	/*----- Collating streams array with AJAX calls to usernames API-----*/
	for (var i = 0; i < usernames.length; i++) {

		var xhr1 = new XMLHttpRequest();
		xhr1.open('GET', 'https://wind-bow.glitch.me/twitch-api/streams/' + usernames[i], true);
		
		xhr1.onload = function(){

			if(this.status == 200)
				streams.push(JSON.parse(this.responseText));
			
			if(streams.length == 8)
				mainFunc(streams);
		}
		xhr1.send();
	}
	/*----- Collating channels array with AJAX calls to usernames API-----*/
	for (var i = 0; i < usernames.length; i++) {

		var xhr2 = new XMLHttpRequest();
		xhr2.open('GET', 'https://wind-bow.glitch.me/twitch-api/channels/' + usernames[i], true);
		
		xhr2.onload = function(){

			if(this.status == 200)
				channels.push(JSON.parse(this.responseText));
						
			if(channels.length == 8)
				mainFunc(channels);
		}
		xhr2.send();
	}
	
	/*--- Function with logics to sort streams array and channels array and display data ----*/
	function mainFunc(arr){
		
		if (arr[0].stream === undefined)
			channelsList  = arr;
		else			
			streamsList = arr;
		// To confirm that streams and channels array have data object
		if(streamsList !== undefined && channelsList !== undefined){
			
			var sortedChannelsList = [];
			/*---Need streams array to find out if channel is Live and sort the channels array objects so that both arrays objects have same index as that of streams array---*/
			for(var i = 0; i < streamsList.length; i++){
				var string = streamsList[i]._links.channel;
				var streamsListDisplayName = string.substr(string.lastIndexOf("/")+1, string.length);
				
				for(var j = 0; j < channelsList.length; j++){
					// toLowercase() since "freecodecamp" display name in ChannelsList is Uppercase every word.
					if(streamsListDisplayName.toLowerCase() == channelsList[j].display_name.toLowerCase()){
						sortedChannelsList.push(channelsList[j]);
						break;
					}					
				}
			}
			/*--- streamsList and sortedChannelsList have list of streamers objects with same index value. Now based on Live and Offline channels, display it accordingly. streams property in streams array tells whether it is Live or not.*/
			var output = '';
			for(var i in streamsList){
				if (streamsList[i].stream !== null) {
					
						output +=
							'<div class="channel divLive">' +
							'<span class="inner1"><img src="'+ sortedChannelsList[i].logo+ '" alt="channel-logo"></span>' +
							'<span class="inner2"><h4>'+ sortedChannelsList[i].display_name+'</h4></span>' +			
							'<span class="inner3"><span class="iconText"><i class="fas fa-rss"></i>' +
							'<em>Live</em></span>' +
							'<h4 class="statusLength">'+sortedChannelsList[i].status+'</h4>' +
							'<a class="channel-url" href="'+sortedChannelsList[i].url+'" target="_blank">'+"Visit Channel"+'</a></span>' +
							'</div>';
				}
				else{

					output +=
					'<div class="channel divOffline">' +
					'<span class="inner1"><img src="'+ sortedChannelsList[i].logo+ '" alt="channel-logo"></span>' +
					'<span class="inner2"><h4>'+ sortedChannelsList[i].display_name+'</h4></span>' +					
					'<span class="inner3"><span class="iconText"><i class="fas fa-minus-circle"></i>'+
					'<em>Offline</em></span>' + 
					'<a class="channel-url" href="'+sortedChannelsList[i].url+'" target="_blank">'+"Visit Channel"+
						'</a></span>' +
					'</div>';
				}
			}
			document.getElementById('channels').innerHTML = output;	
		}
	}
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