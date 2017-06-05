function Loader(){
    this.loader         = $('#loading_box');
    this.background     = $('#loadingBackground');
    this.character      = $('#loadingCharacter');
    this.maxCharacters  = 15;
    this.maxBackgrounds = 13;
    this.animationTime  = 7000;
    this.volume         = 0.4;

    this.load = function(){
        this.loader.show();
    }

    this.playSound = function(){
        var audio = document.getElementById("introSound");
        audio.volume = this.volume;
    }

    this.randomImages = function(){
        var random                  = 0;
        var previousRandom          = 0;
        var previousRandomCharacter = 0;
        var randomCharacter         = 0;

        while (previousRandom == random || randomCharacter == previousRandomCharacter) {
            random = Math.round(Math.random() * this.maxBackgrounds - 1) + 1;
            randomCharacter = Math.round(Math.random() * this.maxCharacters - 1) + 1;
        }

        // Change images
        previousRandom = random;
        previousRandomCharacter = randomCharacter;
        var backgroundUrl = "img/background/" + random + ".jpg";
        var characterUrl  = "img/characters/" + randomCharacter + ".png";

        return [backgroundUrl,characterUrl];
    }

    this.nextAnimation = function (isFirst) {
        var _this         = this;
        var rightToLeft   = Math.round(Math.random() * 1) == 1 ? true : false;
        var randomImages  = this.randomImages();
        var backgroundUrl = randomImages[0];
        var characterUrl  = randomImages[1];

        if(!isFirst){
            // Fade out images and after change it
            this.background.fadeOut(2000, function () {
                _this.background.attr('src', backgroundUrl);
                _this.background.fadeIn(2000);

            });
            this.character.fadeOut(2000, function () {
                _this.character.attr('src', characterUrl);
                _this.character.fadeIn(2000);
            });
        }else{
            //Show images directly
            _this.background.attr('src', backgroundUrl);
            _this.character.attr('src', characterUrl);
        }

        // Alternate right/left directions
        if (rightToLeft) {
            window.setTimeout(function () {
                _this.background.removeClass().addClass("rightToLeftBG");
                _this.character.removeClass().addClass("leftToRight");
            }, 2000);
        } else {
            window.setTimeout(function () {
                _this.background.removeClass().addClass("leftToRightBG");
                _this.character.removeClass().addClass("rightToLeft");
            }, 2000);
        }
    }

    this.open = function () {
        this.playSound();
        this.nextAnimation(true);
        var _this = this;
        window.setInterval(function () {
            _this.nextAnimation(false);
        }, this.animationTime);
    }

}