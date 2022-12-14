# Flatdango
An application that allows a user to purchase movie tickets

# Getting started
To setup and run this project on your machine, follow through these instructions and steps.
In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
- nodejs 9.0+

# Installation
To run this program on your computer, follow through these steps:
  - Fork or clone this repository into your local computer

                git@github.com:e-nk/Flatdango.git
  - Open your cloned repository on the terminal

                cd Flatdango
  - Open the repository in your code editor in this case I am running Vs code.

                code .

<h3>NB: </h3> Make sure you have the node_modules folder in your repository. This folder allows you to run json-server on your machine. 

If you cloned or forked the repository then the folder should be there, so no need to panic!


If you don't have the folder just run this command on your terminal inside the project directory

                npm innit     
After that, enter the following command on your terminal to install json-server

                npm install --save json-server
                
Open the package.json file and and add a comma(,) at the end of the test script on scripts section. Now add this new line at the bottom after the comma
            "start": "json-server --watch db.json"
            
The scripts section should look like this:

                "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "json-server --watch db.json"
                },

This will allow you to just run: npm run start to start json-server

# Running this project
If you have followed through the installation instructions well you should not have any problem running this code.

To execute this code, click on terminal in your Vs Code, then click on New Terminal on the dropdown menu.

On your terminal, enter the following command:

                        npm run start
This will start json-server, you should see two links in your terminal that looks like this:

                        Resources
                  http://localhost:3000/films 

                         Home
                  http://localhost:3000


The first link should open the db.json file contents in your browser. The second now contains the main project

Proceed with this link to view the project
  
      http://localhost:3000
      
      
      
You should see a list of movies and the first movie displayed. You will see availabe tickets and the tickets should reduce on clicking buy


You have successfully run the project  

