# Angular6-playground
Simple project for Capgemini course, integrated with [firebase](https://firebase.google.com/).

## Environment
To set up this project it is necessary to use [Angular-cli](https://www.npmjs.com/package/@angular/cli) **6.0.3** and [Node.js](https://nodejs.org/en/) **8.11.2**
#### Install Angular-cli 
```sh
npm install -g @angular/cli@6.0.3
```
[](https://nodejs.org/en/)
>**Note:** @6.0.3 is used to chose package version
#### Install Node.js
For a better management of node.js versions, i  suggest to use [NVM](https://github.com/nvm-sh/nvm),
after a quick installation on new **cmd window**, use the follow commands:

**To see all node versions installed:**
```sh
nvm list
```
**To install a new version:**
```sh
nvm install 8.11.2
```
**To set up your version:**
```sh
nvm use 8.11.2
```
**For others usefull commands**
```sh
nvm config
```
## Setup Project
Run **npm install** on the project folder, to install all node_modules.
In **src/environments/environment.ts** it is necessary to set your **firebase** keys.
```sh
firebase: {
	//inserire qui credenziali firebase
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: ""
} 
```
>create your free account in [firebase](https://firebase.google.com/) web site, add a new project in it and generate your keys
## Start Project
Use **ng serve** or **npm start**

**Enjoy the magic!**
