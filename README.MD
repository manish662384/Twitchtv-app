Twitch.tv-App:

This is a basic Twitch.tv App, which fetches streamers details in JSON format by making dynamic AJAX calls and displays on the screen. 
Since Twitch.tv API now requires an API key so using proxy server "https://wind-bow.glitch.me/twitch-api"  to fetch details. 
Every channel has their own url.  "streams" set of urls let us know whether the channel is offline/Live, then based on that using 
"channels" urls fetched JSON data and displayed streamers details accordingly based on whether they are Live/Offline.