## My-Portfolio

#### Description:
   > React Portfolio Website
#### Techologies used:
   > HTML, CSS, JS, React + Vite
#### Visit My Portfolio: [My Portfolio](http://pragna-portfolio.netlify.app/)

## Procedure
1. Set up
- Create a folder `portfolio` and open it in VS code.
- Run the following command in the terminal inside `portfolio`.
```cmd
npm vite @latest
```
- Give any name to your project `react-portfolio` click enter and choose `React` and then select `JavaScript` and press enter.
- You've created an app `react-portfolio`.
- Run the following command inside `react-portfolio` to install the dependencies required.
```cmd
npm install
```
- Run the following command to install fonts inside `react-portfolio`.
```cmd
npm install @fontsource/roboto @fontsource/outfit
```
- Run the following command to run your project locally.
```cmd
npm run dev
```

2. Deploying
- You can't publish react directly into the internet, all that browsers accept is HTML, CSS and JavaScript.
- So we have to convert react into HTML, CSS and JavaScript.
- Run the following command in the terminal inside your app `react-portfolio`.
- Before running it stop `npm run dev` command.
```cmd
npm run build
```
- This creates a `dist` folder inside your app.
- You can check your site by running the following command.
```cmd
npm run preview
```

2. Hosting your website 
- You can publish your website through (https://www.netlify.com/).
- Create an account in Netlify and log in.
- Go to `Sites` and click on `Add new site` and select `deploy manually`.
- Now drag and drop your `dist` folder.
- I'll create a website which can be accessed by anyone.
- To change your site name go to `Site Configuration` and click on `Change site name`.

