# Logs Tracker App

![TypeScript badge](https://img.shields.io/badge/TypeScript-73.8%25-1081c1 "Typescript")
![Redux badge](https://img.shields.io/badge/Redux%20Toolkit-1.4.0-764abc "Redux")
![Material UI badge](https://img.shields.io/badge/Material%20UI-4.11.2-e433ea "Material UI")
![ChartsJS badge](https://img.shields.io/badge/ChartsJS-2.11.1-e433ea "ChartsJS 2")
![Docker badge](https://img.shields.io/badge/Dockerfile-3.9%25-65abd3 "Docker")

A SWA React/TypeScript which displays log lines from a backend API

The technologies used to develop this project are:

* ReactJS
* TypeScript
* Redux Toolkit
* Material UI
* ChartJS

![Home page screenshot](home.png "Home Page")

## Comments

Please, [read](COMMENTS.md) my comments on this assigment.

## Prerequisites

Before you continue, ensure you have met the following requirements:

* You have installed the latest version of [Docker](https://www.docker.com/get-started).
* You have a Docker account and your are logged in.
* You have a basic understanding of the terminal and command lines.

## Running the app locally in DEV mode

In order to run the application, this repository should be cloned on a local computer. Opening the computer terminal, the following command needs to be run from the app root folder.

For the first time running the app, please type the following:

`docker-compose up --build`

**IMPORTANT**: This process can take a while. Specially the step "6/9 yarn install --silent". Please do not interrupt the process.

This command will build the development images. Please, keep in mind that the `--build` flag is only required the first time.

Navigate to http://localhost:3000/ in your browser to view the app.

To stop the Docker container run:

`docker-compose down`

To run again the up type `docker-compose up` (without the `--build` flag).

To run the [scripts](#scripts) within the container:

`docker exec -it alveo-logging-app_client <command>` for the client app.
`docker exec -it alveo-logging-app_server <command>` for the server app.
# Technical details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## <a name="scripts"></a>Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

