# Project Title : DREAM 11

This application allows users to select and manage a cricket team by selecting players based on their budget. The app simulates real-world player bidding and team selection, making it fun and interactive.

## Project Overview

This project involves building a React-based application where users can select and manage cricket players for their team. The app follows a specific Figma design layout and includes features such as player selection, coin addition using free credit, and user notifications through React Toastify.

### Features

- **Navbar with User's Coin Balance:** Display the user's current balance in the Navbar. Clicking the "Claim Free Credit" button in the Banner section increases the user's coins.
- **Player Selection with Validation:** Allows users to choose players for their team while ensuring no duplicate players are selected and the total number of players does not exceed six. Player selection is also restricted by the user's available coins.
- **Dynamic UI for Selected/Available Players:** Users can toggle between viewing available players and already selected players. The UI updates automatically when players are added or removed.
- **Toast Notifications:** React-Toastify is used to provide real-time feedback when actions like selecting players or running into limitations occur.

## Technologies Used

- **React.js**: The core library for building the UI components.
- **Tailwind CSS**: For styling and responsive design.
- **React Toastify**: For handling notifications and alerts in a user-friendly manner.
- **LocalStorage**: Used for storing user subscription details.
- **Figma**: Design specifications were followed from the provided Figma file.

## Key Features

1. **Player Selection with Coin Limitation**: Players can only be selected if the user has enough coins and hasn’t exceeded the maximum number of players.
2. **Interactive Banner & Coin System**: Users can click the button in the banner to gain more coins and buy players.
3. **Real-Time Toast Notifications**: Alerts and success messages using React Toastify, providing a smooth user experience.

## ES6 Features Used

The project leverages modern JavaScript features for cleaner and more efficient code:

- **Arrow Functions**: For concise function expressions and maintaining the lexical `this`.
- **Destructuring Assignment**: Extracting values from objects and arrays, simplifying the code.
- **Template Literals**: Used for string interpolation, especially in displaying dynamic messages.
- **Let and Const**: For block-scoped variable declarations, ensuring immutability where required.
- **Spread and Rest Operators**: Used to handle arrays and objects efficiently, especially when updating the state.
- **Fetch Api**: Handling asynchronous operations, ensuring cleaner and more readable promise handling.
  
## Optional Features Implemented

- **Player Removal**: Each selected player can be removed individually.
- **Add More Players Button**: Allows users to return to the available player section and continue selecting players.

## Future Improvements

- Integrate user login functionality for more personalization.
- Add more dynamic stats and information about players.


## Live Link

https://dream11play.netlify.app/
