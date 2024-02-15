## Bot-battlr

Bot Army Management is a web application built with React.js for managing a collection of bots. Users can enlist bots into their bot army, release enlisted bots, and permanently discharge bots.

## Features
- View a collection of available bots.
- Enlist bots into your bot army.
- Release enlisted bots from your bot army.
- Discharge enlisted bots permanently.
##  Technologies Used
React.js
JavaScript (ES6+)
HTML
CSS
Getting Started

## To run the Bot Army Management application locally, follow these steps:

Clone this repository to your local machine.

Navigate to the project directory in your terminal.

Install dependencies by running:

bash
Copy code
npm install
Start the development server by running:

bash
Copy code
npm start
Open your browser and visit `http://localhost:8001` to view the application.

## Code Structure
- `App.js`: Main component of the application. Manages bot enlistment, release, and discharge.
- `Bot.js`: Component to display individual bot information and enlist, release, or discharge options.
- `BotCollection.js`: Component to display a collection of available bots.
- `YourBotArmy.js`: Component to display enlisted bots in the user's bot army.
- `index.js`: Entry point of the React application.
- `index.html`: HTML template file for the application.
## How to Use
- Upon loading the application, you'll see a list of available bots in the Bot Collection section.
- Click the "Enlist Bot" button next to a bot to add it to your bot army.
- Enlisted bots will appear in the "Your Bot Army" section.
- To release a bot from your army, click the "Release Bot" button next to it.
- To permanently discharge a bot from the server, click the "Discharge Bot" button next to it.