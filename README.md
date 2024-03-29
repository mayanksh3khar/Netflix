# NETFLIX UI Clone By Mayank Shekhar

![image](https://user-images.githubusercontent.com/52963184/200511497-da20b0e9-0179-4fb1-91e8-f757bb4400f0.png)

## DEMO LINK - https://netflix-clone-a2717.web.app

## Build

To build yoou need to install NodeJs. and run

### `npx create-react-app my-app`

Delete everything except node_modules and download the files as zip and extract to root directory or just use

`git clone https://github.com/mayanksh3khar/netflix/`

then deploy localhost server in dev mode by the following commmand. Note - You may need to install axios by using `npm install axios` command

### `npm run`

Browser will launch. If everything is working as expected, you can deploy into any server. I'll show you the steps for hosting it onto firebase server. Install using the following command.

### `npm install firebase`

To deploy now use the following command to login to firebase

### `firebase login`

Login into your Google account in the browser window that pops up

Now to setup hosting service you have to use the following command

### `firebase init`

Are you ready to proceed? Yes

Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

In "Please select an option for using an existing project" You can choose an existing project or create a new one from terminal.
Proceed as you like and follow the prompts to select the project

What do you want to use as your public directory? build

Configure as a single-page app (rewrite all urls to /index.html)? Yes

Set up automatic builds and deploys with GitHub? No (Or yes if you wish to do so)

File build/index.html already exists. Overwrite? Yes (if prompted)

Now let's create the production build by using thwe following command

Note: You may need to delete /firebase.json

### `npm run build`

And finally deploy the build to firebase using the following command

### `firebase deploy`

You will get a hosting URL in the end. Congratulations on deploying your own netflix clone.

## Mobile Preview

https://user-images.githubusercontent.com/52963184/200512765-24d742f3-2cb7-4e1b-8300-20ba77a54afd.mp4
