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
maxCharacters  = 4;
maxBackgrounds = 3;
animationTime  = 7000;
```
Be sure to only have 4 backgrounds and 3 characters images file in the /img folders and keep the files naming.
#### How to change music file ?

Replace `files/sound/intro.ogg` file, MP3 is not allowed in NUI browser

#### The volume is too loud, how can i change it ?

Replace the volume value in `files/js/loader.js`
```JAVASCRIPT
volume = 0.5;
```
### Update
[v0.0.1](https://github.com/bt0r/fivem-gta-loading/archive/v0.0.1.tar.gz): First version

[v0.0.2](https://github.com/bt0r/fivem-gta-loading/archive/v0.0.2.tar.gz): 
- Change javascript library to use a modern one : VueJS
- Bugfix : Math.round -> Math.ceil ( 0 value could be possible )

[v0.0.3](https://github.com/bt0r/fivem-gta-loading/archive/v0.0.3.tar.gz): Remove "StopAudio" button ( NUI doesn't support it )


### License
This fivem resource is under Creative Commons CC-BY-NC-SA

### Credits

Twitch: http://twitch.tv/bt0r

Twitter: http://twitter.com/biiitor
