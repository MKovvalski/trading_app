This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm install`

Installs all packages necessary to run the app

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Main assumptions of the project

- provide way for user to search companies he wishes to track
- display list of companies user decided to track
- persist list of companies between page refreshes

## What was done so far

- user can search companies and add them to the list
- user can see a list of companies he/she decided to track
- user can reload company tiles that didnt manage to load

## In the next steps I would like to implement

- displaying more information in the company tile
    - daily trend
    - current stock value
    - image of the company

- persisting company data between page refreshes
    - logic of persist:
        - after first company is chosen by user, cookie is created
        - cookie contains array with company symbols as strings
        - on refresh, companies page checks for cookie with companies
        - if cookie is found, initial state of companies is populated with it
        - company list component maps through said state and create separate requests for each company to gather more info to display
        - each time user chooses new company to track, cookie is overwritten with new value in array

## Limitations

- One of the biggest constrains was the time. It is challenging to create a small app within span of 4 - 5 hours, thus I have built the most important things first.
- provided APIs limits amount of possible requests one can make a day, which limits amount of real time test developer can make
- additionally, there is no endpoint that would provide specific information set about one company, which means that, in order to get company info, one has to request using search, which is not very economic

