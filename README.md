# How to Start the Project

1. Install Dependencies
At the root of the project, run:

`npm run install all`

This will install the dependencies for both the backend and frontend, as well as the concurrently package if it's being used.

2. Start Both Backend and Frontend

After the dependencies are installed, you can start both the backend and frontend simultaneously with:

Thanks to concurrently, this command will:

- Start the Node.js scraper and backend API server on `http://localhost:3000`.
- Start the React app on `http://localhost:3001`.

3. Access the App
Once both the backend and frontend are running:

- Open your browser and go to `http://localhost:3001` to view the app.

The React app will display the list of shows, with "Book Now" buttons for available shows and "SOLD OUT" labels for those that are unavailable.
