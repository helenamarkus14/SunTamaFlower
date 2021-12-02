# SunTamaFlower
A fun virtual sunflower to master the art of being a plant parent. Definitely not easy!!
# Wire Frame:

https://www.figma.com/file/SpNlR15y4b3gTgLsOJO0lF/Project-One?node-id=9%3A253
# User Story


As a user, I want to name my sunflower by typing in the input box. This will start the game.


As a user, clicking the sunlight button will decrease sleepiness.

As a user, clicking the water button will decrease hunger.

As a user, clicking the affirmation button will decrease bordem.

As a user, I want to see the amount of each metric scale easily on the screen using a bar.

The goal is to keep the sunflower alive by keeping all levels below 10.

The plant will grow when day hits 20. Day increases by 1 every 1.5 seconds;



# Approach

My approach for this project initially was to do a lot of DOM manipulation. That backfired quickly after a few days and I had to restart since nothing was working. I am more comfortable with vanilla JS so I decided to start there. Figuring out the setInterval capibilities was key to making my sunflower's metrics work properly. 

Utilizing set interval to increase the metric progress bars made my game work great.

Event listeners added to the buttons was the easy part... get them to work in sync with the progress bars was a big roadblock, but finally was able to make it work. 



# If I could go back with more time:

AAU, clicking the sunlight button will show a sun image over the flower.

AAU, clicking the water button will show a watering can image over the flower.

AAU, clicking the affirmation button will show a heart image over the flower.


I had the idea to include a counter of how many of each metric is clicked, but never figured out how to make it work. I kept the code in my project so when I can, I can go back and play around with it.  







