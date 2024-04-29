# Run project
1. Clone or download the project as a zip-file.
2. Unzip
3. Inside root folder, open a terminal.
4. Run the command `npm i`. This will install dependencies listed in `package.json`.
5. Create your own `.env` file in root folder. Here is where you write your email and password.
The file must use these variables:
```
MY_EMAIL=example@gmail.com
APP_PASS=examplepassword
```
6. Run `node index.js` to start the website at localhost.
Or run `npx nodemon index.js` if you are using nodemon.