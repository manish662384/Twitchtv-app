Twitch.tv-App:

This is a personal project named Twitch.tv App, which fetches pre-defined streamers details in JSON format by making dynamic AJAX calls and displays on the screen. 
Since Twitch.tv API now requires an API key so using proxy server "https://wind-bow.glitch.me/twitch-api"  to fetch details. 
Every channel has their own url.  "streams" set of urls let us know whether the channel is offline/Live, then based on that using 
"channels" urls fetched JSON data and displayed streamers details accordingly based on whether they are Live/Offline.

Features:
1.	onload of the page it fetches pre-defined 8 twitch.tv users from the API
2.	Contains 3 buttons, ALL which displays all 8 users, Live which displays live users, and Offline which displays offline users.
3.	Contains basic information about the twitch.tv users, which are, their logo, channel name, Live/Offline, live running program name, and a link 
	routing to their channel on a seperate tab.
4.	Completely responsive across all platforms such as tab/mobile

Technologies:
Javascript(ES6), HTML, CSS, AJAX, JSON, CSS3 Flexbox(layout model), CSS3 Media-Queries

Libraries:
1.	fontawesome