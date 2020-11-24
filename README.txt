WHAT DO I HAVE TO DO TO START A NEW PROJECT???
    -copy everything from this project folder into your new project folder
    -in the following files, follow the TODO comments at the top of the file
        x-./server/config/mongoose.config
        x-./server/controllers/template.controller.js
        x-./server/models/template.model.js
        x-./server/routes/template.route.js
        x-./server.js
    -change the word "template" in the following files
        x-./server/controllers/template.controller.js
        x-./server/models/template.model.js
        x-./server/routes/template.route.js
    -in main project folder, run this command
        -npm install
    -in client folder, run this command(note that bootstrap is a dependency, delete in package.json if you don't want it)
        -npm install
    -you should be good to go! make sure to change what you need in App.js and refer to old projects as reference
    *to run, you must run the server and the react client simultaneously
        -in main project folder
            -npm start
        -in client folder
            -npm run start
    *to do more database operations, make new functions in your controller and add a route for it
        -look up the mongoose documentation if you need help
    

Things already done to start this project up to this point:
    -in main project folder,
        -npm init -y
        -npm install --save cors express mongoose
        -npx create-react-app client
    -create folder called "server"
        -four sub folders called "config", "controller", "models", "routes"
        -add file in each folder with code I already wrote
    -create server.js
        -fill with pre-written code
    -added script in package.json to run with just npm start
    -added TODOs on each file to explain what to replace.
    -in client folder
        -npm install --save @reach/router axios bootstrap
        -created "views" and "components" folders
            -added views/Main.js and filled it with boilerplate function
        -changed App.js so it includes a router to Main.js and includes bootstrap css
    -deleted node modules folders in project folder and client folder
        -this saves time for trying to copy over the template project