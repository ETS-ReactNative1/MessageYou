# MessageYouApp

## Showcase
<img src="https://github.com/Dmytrocode/MessageYou/blob/master/content/Chats.jpg" height="463" width="230" > <img src="https://github.com/Dmytrocode/MessageYou/blob/master/content/Login.jpg" height="463" width="230">
<img src="https://github.com/Dmytrocode/MessageYou/blob/master/content/chatsHomeScreen.jpg" height="463" width="230" >
<img src="https://github.com/Dmytrocode/MessageYou/blob/master/content/createChat.jpg" height="463" width="230">

## Description

MessageYou is a Real-Time Chat Application build with Javascript using React Native. Users can Register and use their authenticated account to create chats and send messages to other authenticated users within the application. 

- What problem does it solve?
- What did you learn?

## Technologies Used
The goal of this application was to keep it as simple as possible. However, there are still a few technologies used that make the development much easier
- React Native (Vanilla Javascript)
- React Native Navigation
- React Native Elements
- React Native Gesture Handler
- Firebase

## Table of Contents

- [Installation](#installation)
- [Developer Usage](#developer operating instructions)
- [Build & Deployment](#Build & Deployment)
- [User Usage](#user Operating Instructions)
- [Credits](#credits)
- [License](#license)

## Installation
If you wish to build this application in your local machine, there are a certain steps to follow:

ATTENTION: Before proceeding, make sure that your expo-cli and NPM/Yarn Package Manager is up to date. 
I strongly suggest using YARN instead of NPM as I found multiple bugs and problems using npm to install packages and libraries.

If you don't have expo-cli installed, Feel free to use:
```
$ yarn global add expo-cli
```

Clone the application in your own local directory:

```
$ git clone https://github.com/Dmytrocode/MessageYou.git
```
Install the Navigation, Elements, and Gesture Handler libraries and dependencies:
```
$ yarn add react-native-gesture-handler
$ yarn add @react-navigation/native 
Dependencies:
$ expo install react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
MORE INFORMATION: https://reactnavigation.org/docs/getting-started/

## Developer Operating Instructions
After installing the libraries and dependencies, you are free to run the project using yarn / npm start, depending how the app was setup:
```
$ yarn start
```
or
```
$ npm start
```
This application can be simulated in an Android Device. You can use Android Studio to setup virtual Android devices.
https://developer.android.com/studio
 
## Build & Deployment 
Before building the application, it is a good idea to make sure that you are logged in the local [firebase-cli](https://firebase.google.com/docs/cli) using:
```
$ firebase login
```
Once the developer is logged in, feel free to initialize the Application with [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart) using:
```
$ firebase init
```

When that is completed, the developer might build the application as "web-build" using expo-cli:
```
$ expo build:web
```

## User Operating instructions
To operate the Application, the user must first Register an account through the Register page. 

After the user is authenticated through either the register or login page, they will be redirected to the Chats Home Page, where the chats will be displayed in the display. 

At this point, the user might either join an existing chat, or create a new Chat using the bottom right round button. 

To create a chat, the user must input a name for the chat, and then click the Submit button.

Once an user joins a chat, they are able to write messages that will appear in the right side of the screen. 

Messages from other users appear in the left side of the chat screen.

## Credits && Sources
https://reactnative.dev/docs/getting-started

https://firebase.google.com/docs



## License

You are free to clone, modify, and deploy the application as you wish. 
- Free for Commercial Use
- No Attribution Required


## Features

If your project has a lot of features, list them here.




