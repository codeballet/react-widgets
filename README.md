# The Widgets App
This is a simple React App that contains some useful widgets.
The app also features a custom built navigation system.

## Requirements
Before running the App, you need to create a developer account with [Google](https://console.developers.google.com).
In the Google console, create an application for their Translation API, which will give you an Access Key.
Once you have the Access Key, create a `.env.local` directory at the root of the project with an environment variable named `REACT_APP_TRANSLATE_KEY`.
Assign the Google Access Key to the above environment variable. For instance, the `.env.local` file may contain a line similar to this (with a fictional Access Key):
```
REACT_APP_TRANSLATE_KEY=hufdg98458938yrfeiogy8r979-0423879r89yhiogf
```

## How to run the app
Once you have got the application Access Key, and you have created the above described `.env.local` file:
1. Clone the Git repository.
2. Run `npm install` to install the node modules.
3. Run `npm run start` to run the app in developer mode.

## Building for production
In order to create a production build, run `npm run build`.
That will generate a production optimized app in the `Build` directory.

## License
MIT