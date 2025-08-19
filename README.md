# Pomodoro ReactJs x ElectronJs app (with python as a backend)

I made this project for the sole purpose of just learning how to integrate React, Electron and python together in an app.

## React Role

React just draws the UI, I used AdobeXD to draw it and make a concept, then tried exporting a web element from that UI, trimmed it from useless things (like random scripts), optimized the CSS and made it into it's own file, then created motions to make click animations and background animations.

## Electron Role

Electron made things very tricky since operating it with React was not very straight forward, I used a bunch of libraries that I will not bother noting here and will all be available in the Package.json file in the project.

## Python Role

As much as python was not needed at all in this project, since I could easily just write the functions code directly in React, I still wanted to expirement with using python as a backend, I tried to use websockets first, which ended very badly, then used python-shell in react which made things very easy. I am definitely expanding on this idea, since I wanna learn FastAPI and more python libraries that are more high leveled. Additionally, I will be working on a project that requiress C++ , React & Electron !!

## The idea

This is a simple pomodoro app that calculates time and sends it back to react to get displayed on electron. The main file contains threads that allow me to stop them, pause them and manipulate them at will. I will be adding a menu, with settings , themes and music aswell as sound effects, with customizeable time intervalls, break times in a loop (in python obv). In react, I will just animate the menu, my idea is to create a conccept again on adobeXD then using that I will export it as usual, integrate it into React and animate using bodymovin an AfterEffects Extension and export it as a lottie animation.

## For Future references

This is my first official github project, This project was made as a fun project to get the basics of react, motion/react, electron, integrating python to webapps as a backend language, APIs and communication between clients and server (Basically simulating as if python was on a different network using websockets and flask, which was not featured in this project).
I am aiming to make a full on webapp that is a flask Python server communicating with clients, which will be a base for a lot of different apps mainly a chatting app between me and my friends, a remote access app etc... I already have that app made as a joke app between me and my friend but without UI, including features like :

working:

#getip - gets the ip
#sendimage - sends an image
#getscreenshot - gets a screenshot
#getwebcam - gets a picture with the webcam
#sendalert - sends a fake alert (sendalert/nameofwindow/context)

these don't work yet :

#sendbeep - sends a high frequency beep
#bsod - blue screen of death (fake one )
#NoMouse - Blocks Mouse movement
#NoKeyboard - Blocks all keyboard inputs
#killmode - Bsod + beeps + nomouse + LIVE REACTION WEBCAM PIC(do this if you hate the person lol (harmless all fake functions) )

to add:

#Jumpscare X - Jumpscares the user (x is the number so we can add multiple jumpscares ps: might change it to any picture I choose instead)
#PlaySound - choose a sound to play on the client's pc

And yea this is all of it, hope you like it. It's nothing much, but it's still something :D.
