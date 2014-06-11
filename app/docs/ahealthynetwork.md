# HealthyNetwork
# TheWholeNetwork ?


## Overview
Holistic living info/social network providing users with holistic health information and a means of sharing helpful and inspirational information with other users.

### Technology
	#html5/css3
	#javascript
	#jquery
	#angular js (twitter bootstrap)
	#firebase for data storage (https://github.com/twilson63/ngUpload)
	#simple login

### Wireframes
	#see balsamiq mockups (docs/wireframes)

### Features (MVP)
	#responsive site
	#geolocate/manual (registration process)
	#home/registration login
		current users sign in 
		simple log in
	#create account
		manual form
		simple login(login with twitter)
	#user profile page (private view - edit)
	#img upload/file input
	#form for details/form inputs
	#location (Geolocate/manual entry)
	#privacy settings
		default (only image is public)
	#other users activity
		CRUD local
	#my news/info
	#my local community/interests
		CRUD
	#my journal
		CRUD text/images/videos
	#public profile display
		send request to other user
		CRUD edit/remove posts from other users’ journals

### Need to know requirements
	#Design - see balsamiq wireframes (/wireframes)
	#Geolocate - google maps api
	#CRUD for holistic health info
	#CRUD for local activities
	#CRUD user journal communication system 
	
#Feature stories
**1. Wellness news and information**
	* As a user of HealthyNetwork, I need to access holistic living information in an easily digestible format so that I can spend less time seeking information on the internet.
	* Assume user is logged in.
	* HealthyNetwork will GET holistic living information from healthfinder, twitter, tumblr, huffingtonpost, theatlantic APIs and POST the information to real-time feed on user's profile (widgets?).

**2. Local activity information**
	* As a user of HealthyNetwork, I need to access local healthy events and activities in an easily digestible format so that I can spend less time seeking information on the internet.
	* Assume user is logged in.
	* HealthyNetwork will GET local holistic information from Activity API and POST the information to real-time feed on user's profile (widgets?).

**3. Journal Shares and Posts**
	* As a user of HealthyOm, I need to post thoughts and information not only on my journal but also in other user's journal so that I can communicate with other users.  
	* Assume user is logged in.
	* HealthyOm will provide a add post button on user's own journal to render a modal with a simple input fields for files, text, vidoes.  The text input field will be limited to 175 characters.  Users will also render a modal on submit of an existing journal post.  Remove and edit will be options.
	*HealthyNetwork will allow users to add, edit, and remove journal posts on other users' walls IF users are connected via share requests. Share requests are notifications via email. On share request submission, requesting user sends email requesting permission to share.  Confirmation link in email approves share, and reveals add, edit, remove buttons on receiving user's journal.  Also, requesting user receives alert.  Deny link deletes the request, and requesting user receives denial alert.

Roadmap: v2.0
	-pin down best APIs for holistic information (medical, lifestyles)
	-map routes, controllers, services for various APIs
	-map the same for sharing journals and posts