# 15 Steps Guide to the "Vote Now"-application:

## Introduction
In this project, you will be building a web-based voting application called "Vote Now". This app will allow users to cast votes for one of three candidates: Trump, Biden, or Kennedy. The users will provide their full name and email address, and select their preferred candidate through a simple form interface. As part of the backend, you will handle storing these votes in a text or CSV file. Moreover, you'll create an admin panel, secured via login, where authorized administrators can manage the election process. Admins will have the capabilities to stop the election, view and sort the results, and even publish the results by sending them via email. This application will not only help you understand web development using Node.js, Express, and EJS, but also how to interact with the filesystem and send emails programmatically. By the end of this project, you will have a functional voting system which you can enhance further with additional features as you advance your skills.

## 15 Steps

1. **Set Up Your Environment**:
   - Install Node.js and npm if not already installed.
   - Create a new directory for your project and initialize a new Node.js project using `npm init -y`.

2. **Install Necessary Packages**:
   - Run `npm install express dotenv nodemailer ejs` to install your dependencies.

3. **Initialize Git Repository**:
   - In the project directory, initialize a git repository with `git init`.
   - Create a `.gitignore` file and add `node_modules/`, `.env`, and any other sensitive or unnecessary files.

4. **Set Up Basic Server**:
   - Create a file called `app.js`.
   - Import necessary libraries and set up a basic Express server listening on a port (e.g., 3000).

5. **Environment Configuration**:
   - Create a `.env` file in the root directory.
   - Define environment variables for admin username, admin password, and nodemailer configurations (email and app password).

6. **Create Frontend Templates**:
   - Set up EJS as your templating engine with `app.set('view engine', 'ejs')`.
   - Create EJS templates for the homepage (`index.ejs`), the voting form (`vote.ejs`), and the admin panel (`admin.ejs`).
   - Remember correct folder structure, see past projects!

7. **Routing for Home and Voting Form**:
   - Set up routes in `app.js` for the homepage and voting form using `app.get()` and `app.post()` respectively.
   - Ensure the voting form collects the full name, email address, and selected candidate.

8. **Handling Voting Submissions**:
   - On form submission, capture the data and write it to a `.txt` or `.csv` file stored on the server.

9. **Admin Authentication**:
   - Create a login route and form for the admin.
   - Compare submitted credentials against those stored in the `.env` file.

10. **Admin Panel Functionalities**:
    - Allow admins to view voting results.
    - Implement features to sort results and a button to stop the election.

11. **Result Management**:
    - Write functionality to read from the vote storage file and display results in the admin panel.

12. **Publish Results**:
    - Set up nodemailer in your project to send emails.
    - Implement functionality for admins to send results to a specified email for testing (student’s own email). This will happen once the election has been stopped.

13. **Stopping the Election**:
    - Implement logic to disable further voting submissions once the admin stops the election.
    - When the admin tries to stop the election, he will have to reenter his password to confirm the choice.

14. **Testing**:
    - Test the application thoroughly to ensure all parts are working as expected.
    - Pay special attention to form submissions, file writing, and email sending.

15. **Version Control**:
    - Use Git to commit changes regularly during development.
    - Push the final version to a remote repository, like GitHub, for safekeeping and sharing.

16. **Launch the project with ngrok**:
    - Finally, launch the project using ngrok.
    - Send the link to another student for testing.
