# FiveM GTA Loading Screen
 
### Description
This resource must be use with FiveM, it will show a vanilla GTA loading screen using HTML/CSS/JS.
Characters and background are showed randomly so your loading screen is "**Never the same**"
### Installation
Download the resource or git clone it and put it in your resources folder with the name `fivem-gta-loading`

In your `citmp-server.yml` file, add the resource: 
```YML
 - fivem-gta-loading
```
### Questions

#### How to change image files ?

Just replace files in `files/img/background` and `files/img/characters`
#### How to add/remove images and edit the animation duration time ? 
Example : 
You want to have just 3 backgrounds and 4 different characters.
Just edit `files/js/loader.js` with these values :
```JAVASCRIPT
this.maxCharacters  = 4;
this.maxBackgrounds = 3;
this.animationTime  = 7000;
```
Be sure to only have 4 backgrounds and 3 characters images file in the /img folders and keep the files naming.
#### How to change music file ?

Replace `files/sound/intro.ogg` file, MP3 is not allowed in NUI browser

#### The volume is too loud, how can i change it ?

Replace the volume value in `files/js/loader.js`
```JAVASCRIPT
this.volume = 0.4;
```
### Credits

Twitch: http://twitch.tv/bt0r

Twitter: http://twitter.com/biiitor
