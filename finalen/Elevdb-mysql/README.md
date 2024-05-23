# Get started

1. Write `npm i` to install modules.
2. Create `.env` file. Put your username and password to connect to your MYSQL database-server there. Use variable names
```
DB_USER=...
DB_PASS=...
```
3. Run the sql code in `create_tables.sql`, if you need to delete old stuff, just delete the entire table.
4. Run the sql code in `fill_tables_dith_data.sql`.
5. Run the app with `npx nodemon app.js`. NB! If you don't have nodemon, run `npm i nodemon -g`.

Next steps:
1. Write all students in a table once a button is clicked. "Vis alle elever".
2. Create input field where you can search for a specific student by first and last name.
3. Create an input field where you can search for a course, and get all information about the students in this course.