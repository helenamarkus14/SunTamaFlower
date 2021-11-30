//On the main page, the user types in their pet's name and it should display throughout the game. 
//clicking the grow your sunflower will:
// start the game and show all the metrics for the game
    // start as small sunflower day 0:
        // start timer
            //transforms when timer hits 30 seconds? day 3
        // sunsine will decrease by x interval
        // water will decrease by x interval (slowest)
        // affirmation will decrease by x interval (fastest needy plant)

    // game will end if any metric hits 0



    //-----progress bars-----//
    
    //sunshine
    let sunshineBar = document.querySelector('.sunshine-bar');
    //water
    let waterBar = document.querySelector('.water-bar');
    //words of affirmation
    let affirmBar = document.querySelector('.affirmation-bar');

    //-- buttons--//
    // all need event listeners

    let startPlant = document.getElementById('beginGame');
    let sunButton = document.getElementById('sunshine-button');
    let waterButton = document.getElementById('water-button');
    let affirmButton = document.getElementById('affirmation-button');
    
    
    // ---counters--- //

    let sunshineCounter = document.querySelector('.sunshine-counter');

    let waterCounter = document.querySelector('.water-counter');

    let affirmCounter = document.querySelector('.affirmation-counter');

    // --instructions--//

    let instructions = document.querySelector('.instructions');

    let babySun = document.querySelector('.sunflower'); //this will update when it hits a certain age
    // -- variables -- //
    let sunshineWidth = 10;
    let waterWidth = 10;
    let affirmWidth = 10;

    let sunNum = 0;
    let waterNum = 0;
    let affirmNum = 0;

    let timerPlaceholder = document.getElementById("timer");

    let endGame = false;

    let sunMax = false;
    let waterMax = false;
    let affirmMax = false;




    // start game //

    function startGame () {
        document.getElementById("pet-name").innerHTML = document.getElementById('inputName').value;
        $('.gamebeginarea').hide(1000);
        $('.instructions').hide(1000);
        $('img').attr('src', "images/babySunTransparent.png");
    
        needsSunshine();
        needsWater();
        needsAffirmation();
        

       
      }
      //these functions increase bars
      function needsSunshine() {
          setInterval(function(){
              if (sunshineWidth < 300 && endGame === false && sunMax === false) {
                  sunshineWidth = sunshineWidth + 0.15;
                  sunshineBar.style.width = sunshineWidth + 'px';
              }
          }, 20);
      }

      function needsWater() {
          setInterval(function() {
              if (waterWidth < 300 && endGame === false && waterMax === false) {
                  waterWidth = waterWidth + 0.2;
                  waterBar.style.width = waterWidth + 'px';
              }
          }, 20);
      }

      function needsAffirmation() {
          setInterval(function() {
              if(affirmWidth < 300 && endGame === false && affirmMax === false) {
                  affirmWidth = affirmWidth + 0.2;
                  affirmBar.style.width = affirmWidth + 'px';
              }
          }, 20);
      }
      //these functions give sun, water, and affirmation
      

      function startAge() {
        setInterval(function () {
          if (time < 10) {
            time++;
            timerPlaceholder.textContent = `age: ${time}`;
          } else {
            death();
          }
        }, 15000);
      }
    
   
    

    
















    // event listeners //
    // sunButton.addEventListener("click", giveSunshine;
    // waterButton.addEventListener("click", giveWater);
    // affirmButton.addEventListener("click", giveAffirmation);
    startPlant.addEventListener("click", startGame);