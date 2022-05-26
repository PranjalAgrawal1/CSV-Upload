# CSV Upload
This time working with external data, as in ‘csv’ files. Uploads a CSV file and shows the data in it.

## dependencies:
connect-mongo, mongoose, cookie-parser, dotenv, ejs, express, express-ejs-layouts, express-session, nodemon, csv, csv-parser, fs, multer


## Tech Stack:
- Node JS
- Express JS
- Mongo DB
- HTML, CSS
- Heroku


## Features
- Uploads any csv file into the system (consider the delimiter to be a comma ‘ , ’).
- Display a list of all uploaded csv files.
- When the user selects a file, display all the data
- search box which searches data from the table
- Sorting button (ascending and descending) for each column




# Directory Structure

```
CSV Upload
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env
├── assets
│   ├── css
│   │   └── csv-view.css
│   └── js
│       └── auto-tables.png
├── config
│   └── mongoose.js
├── controllers
│   └── home-controller.js
├── models
│   └── file-path.js
├── routes
│   └── index.js
├── uoploads
│   ├── file.csv
:   :
:   :
│   └── file.csv
│     
└── views
    ├── scv-view.ejs
    ├── home.ejs
    └── layout.ejs

```

  
## Git Clone
To use this repository in your local system-

<a href="https://github.com/PranjalAgrawal1/CSV-Upload.git" target="_blank">https://github.com/PranjalAgrawal1/CSV-Upload.git </a>

or run this command in your GitHub CLI

###### `gh repo clone PranjalAgrawal1/CSV-Upload`
<br>



## <a href = "https://csv-upload-1.herokuapp.com/" target="_blank"> Demo / Hosted on - https://csv-upload-1.herokuapp.com/ </a>




