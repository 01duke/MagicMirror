/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
<<<<<<< HEAD
	address: "0.0.0.0", // Address to listen on, can be:
=======
	address: "localhost", // Address to listen on, can be:
>>>>>>> e9e2dc55b64406a6eba38dfcb08286a34f39a5f9
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
<<<<<<< HEAD
	ipWhitelist: [], // Set [] to allow all IP addresses
=======
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
>>>>>>> e9e2dc55b64406a6eba38dfcb08286a34f39a5f9
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default 
	//   starts serveronly and then starts chrome browser
	// false, default for all  NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [{
					symbol: "calendar-check",
					url: "https://calendar.google.com/calendar/ical/shane.duke88%40gmail.com/private-6099dddf6f4ad23946a53b1d9f57d728/basic.ics"
				}]
			}
		},
		// google photos pi commands
		// git clone https://github.com/eouia/MMM-GooglePhotos.git
		// cd MMM-GooglePhotos
		// npm install
		{
			module: "MMM-GooglePhotos",
			position: "middle_center",
			config: {

				albumId: ["ALBUM_ID1", "ALBUM_ID2"], // your album id(s) from result of `auth_and_test.js`
				refreshInterval: 1000 * 60, // Number of milliseconds before showing a different photo
				scanInterval: 1000 * 60 * 10, // too many scans might cause API quota limit also
				//note(2018-07-29). It is some weird. API documents said temporal image url would live for 1 hour, but it might be broken shorter. So, per 10 min scanning could prevent dead url.

				sort: "time", //'time', 'reverse', 'random'
				showWidth: "800px", // how large the photo will be shown as. (e.g;'100%' for fullscreen)
				showHeight: "600px",
				originalWidthPx: 800, // original size of loaded image. (related with image quality)
				originalHeightPx: 600, // Bigger size gives you better quality, but can give you network burden
				opacity: 1, // target "opacity" property (https://www.w3schools.com/cssref/css3_pr_opacity.asp)
				mode: "hybrid", // "cover" or "contain" (https://www.w3schools.com/cssref/css3_pr_background-size.asp)
				// "hybrid": will change "cover" and "contain" automatically based on aspect ratio
				showDateLabel: true, // If True, shows a label of how long ago the photo was taken (e.g. 2 years ago, 7 days ago, etc...)
			}
		},

		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Idaho Falls",
				locationID: "5596475", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "9ad9ed31fe50ebed3f38ca3907a8dba7"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Idaho Falls",
				locationID: "5596475", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "9ad9ed31fe50ebed3f38ca3907a8dba7"
			}
		},
		{
			module: "MMM-GooglePhotos",
			position: "bottom_right",
			config: {

				albumId: ["ALBUM_ID1", "ALBUM_ID2"], // your album id(s) from result of `auth_and_test.js`
				refreshInterval: 1000 * 60, // Number of milliseconds before showing a different photo
				scanInterval: 1000 * 60 * 10, // too many scans might cause API quota limit also
				//note(2018-07-29). It is some weird. API documents said temporal image url would live for 1 hour, but it might be broken shorter. So, per 10 min scanning could prevent dead url.

				sort: "time", //'time', 'reverse', 'random'
				showWidth: "800px", // how large the photo will be shown as. (e.g;'100%' for fullscreen)
				showHeight: "600px",
				originalWidthPx: 800, // original size of loaded image. (related with image quality)
				originalHeightPx: 600, // Bigger size gives you better quality, but can give you network burden
				opacity: 1, // target "opacity" property (https://www.w3schools.com/cssref/css3_pr_opacity.asp)
				mode: "hybrid", // "cover" or "contain" (https://www.w3schools.com/cssref/css3_pr_background-size.asp)
				// "hybrid": will change "cover" and "contain" automatically based on aspect ratio
				showDateLabel: true, // If True, shows a label of how long ago the photo was taken (e.g. 2 years ago, 7 days ago, etc...)
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/

if (typeof module !== "undefined") { module.exports = config; }
