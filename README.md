# MORENT

### MORENT - A Modern CarRent Application
![car](https://user-images.githubusercontent.com/63349857/211439943-30a59190-ef43-4500-a6eb-3c9490105144.png)


MORENT is a web-based application that allows users to rent cars from a variety of locations around the world. Users can search for cars based on their desired location and rental dates, view available options, and book their rental directly through the application.

MORENT features a user-friendly interface and secure payment processing, making it easy and convenient for users to rent cars on the go. The application also includes a variety of filters and sorting options, allowing users to find the perfect car for their needs.

### Application in Action

in progress...

### Built With

MORENT Car Rent Application is built with modern web technologies, TypeScript for type-safe JavaScript, CSS Modules for modular and reusable CSS, and React Context API for managing application state. It also integrates with external platforms like Stripe for payment processing, and MongoDB for data storage. Finally, Google OAuth2 and Passport.js is used to handle user authentication and authorization:

- **TypeScript** is a typed superset of JavaScript that allows developers to add type annotations to their code, providing additional type checking and improved code readability. TypeScript can be used with a variety of different JavaScript libraries and frameworks.
- **Styled Components** Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!
- **Stripe** is a platform for building and managing online payment systems. It provides APIs for integrating with a variety of payment methods, including credit cards, bank transfers, and digital wallets.
- **Express** is a web application framework for Node.js that provides a simple and flexible way to build web applications and APIs. It includes a range of features for routing, middleware, and error handling.
- **MongoDB** is a cross-platform document-oriented database that stores data in JSON-like documents. It is designed for flexibility and scalability, making it a popular choice for modern web applications.
- **Google OAuth 2.0** Google OAuth 2.0 allows users to share specific data with an application while keeping their usernames, passwords, and other information private.
- **Passport.js** Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.

### **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

\***\*Prerequisites\*\***

- git
  If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (**[https://git-scm.com/](https://git-scm.com/)**).
- Node.js
  Application requires Node.js to be installed on your system in order to run. You can download and install the latest version of Node.js from the official website (**[https://nodejs.org/](https://nodejs.org/)**).
- npm (Node Package Manager)
  npm is the package manager for Node.js, and is used to manage the dependencies and packages required for your Next.js project. It is installed automatically when you install Node.js.
  To check if npm is installed on your system, you can open a terminal or command prompt and enter the following command:
  ```bash
  npm -v
  ```

Once you have these prerequisites in place, you can proceed to clone the project from GitHub using Git.

\***\*Installing\*\***

Make sure you have all the necessary prerequisites installed on your system. Follow the below steps to install the setup the project on your machine:

- Open a terminal or command prompt and navigate to the directory where you want to clone the project.
- Run the following command to clone the project from GitHub:
  ```bash
  git clone https://github.com/sethumadh/MORENT_Modern_Car_Rental_Application.git
  ```
- This will create a new directory called " MORENT_Modern_Car_Rental_Application-main " in the current location, containing the code for the Car Rent project.
- Navigate to the project directory by running the following command:

  ```bash
  cd Morrent-CarRental
  ```

  -Navigate to Frontend

  ```bash
    cd Frontend
  ```

- Run the following command to install the project's dependencies using npm:

  ```bash
  npm install
  ```

- Start the server on the Frontend

  ```bash
  npm run dev
  ```

  -Navigate to Backend

  ```bash
    cd Backend
    cd src
  ```

- Run the following command to install the project's dependencies using npm:

  ```bash
  npm install
  ```

- Start the server on the Backend

  ```bash
  nodemon 
  ```

- To use the MORENT project, you will need to set up some environment variables on your development machine. Here are the steps to follow:

  1. Create a **`.env`** file in the root of the project.
  2. Add the following variables to the **`.env`** file, replacing the placeholder values with your own:

  ```jsx
  STRIPE_SECRET_KEY=<your-stripe-secrect-key>
  STRIPE_PUBLISHABLE_KEY=<your-stripe-publishble-key>
  MONGO_USERNAME=<your-cloudinary-cloud-name>
  MONGO_PASSWORD=<your-cloudinary-api-key>
  SERVER_PORT=<your-server-port>
  GOOGLE_CLIENT_ID=<your-google-client-id>
  GOOGLE_SECRET=<your-google-secret>
  MONGODB_URI=<your-mongodb-uri>
  SESSION_SECRET=<your-session-secret>
  ```

  1. Save the **`.env`** file.
     These environment variables are required for various aspects of the project, such as payment processing with Stripe, authentication with Google OAuth 2.0, and database connectivity with MongoDB. Be sure to replace the placeholder values with your own values that you obtained from the respective services.

- Once the dependencies are installed, you can run the project locally by running the following command:
  ```bash
  npm start
  ```

This will start the development server and open the CarRent application in your default web browser.

### Features

- Vehicle Search: Search for a car to rent based on various criteria, such as location, availability, and type of vehicle.
- Payment processing: Securely enters and processes payment information.
- Vehicle availability: Display the availability of vehicles in real-time, so users can quickly determine which options are currently available for rent.
- Vehicle details: View detailed information about the vehicles available for rent, including make and model, features, and pricing.
- Account management: Create and manage their own profiles within the app, including the ability to save payment information and rental preferences.
- Posting a vehicle for rent: Users who own a vehicle should be able to list it for rent through the app, setting the availability, pricing, and other details.
- Liking a vehicle and being able to view liked cars.
- Authentication - Being able to Sign in or Sign Out of application.

### Contributing

We welcome contributions to MORENT! If you have an idea for a new feature, an improvement to an existing feature, or a bug fix, please open an issue to discuss it before submitting a pull request. This helps me to review and understand your changes more efficiently.

To contribute code to MORENTt:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes to the new branch
4. Run the automated tests to ensure that your changes do not break any existing functionality
5. Open a pull request back to the main repository, including a description of your changes and any relevant issue numbers

Please make sure that your code follows the coding style and standards used in the rest of the project. We also ask that you write tests for your changes, to ensure that they are robust and reliable.

Thank you for your contribution to MORENT! We appreciate your efforts to help make this a great car renting application.
