# Express Playground

A collection of Node and Express practices, as well as an area for me to try out new methods.

## Usage:

### Install Dependencies and run:

```
git clone https://github.com/LaSav/express-playground
npm install
npm run server

go to https://localhost:3000 in browser
```

## Repo Map:

root
|
-- Express Method 1
| |
| --- controller.js
|
-- Express Method 2
|
-- public
|
-- routes
|
-- server.js

Application is organized by 'Express Method' folders containing a controller.js which is handled through routes.

To add a new Express Method:

Create a new folder in the root directory with a name to describe the Express Method, then create a controller.js file.

Next, add an expressMethodRoutes.js file for the newly created Express Method in the routes folder.

Finally, add: app.use(route, require(expressMethodRoutes)) in server.js.

You may need to include UI to represent the Express Method in public/index.html.
