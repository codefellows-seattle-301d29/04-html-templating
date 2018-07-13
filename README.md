![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 04: HTML Templating w/HandlebarsJS
===

# HTML templating w/ Handlebars

**Author**: Nicole
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
This application dynamically generates articles on a web page. We use handlebars js to streamline the templating process so that each key value pair in the object will be filled out much more quickly and efficiently.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
Create an index.html file which contains all the templating and scaffolding for the website, create CSS files for styling, create blogArticles.js files which contain all the article objects, create article.js file which handles the instantiating of objects and utilization of the Handlebars template, create articleView.js file which handles the showing and hiding of features on the page.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
We use HTML for content, utilizing Handlebars for their templating features. CSS is used for styling of the web page. Javascript for the logic and jQuery for dynamically filling the DOM.

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples: -->
01-13-2018 09:00PM Cloned repository to computer.
01-13-2018 09:05PM Added script tags to HTML.
01-13-2018 09:20PM Created Handlebars Template.
01-13-2018 09:30PM Created toHTML function in Articles JS
01-13-2018 09:40PM Refactored functions.
01-13-2018 10:15PM Did debugging to figure out why filters were not working.


## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
Handlebars documentation helped me build this application. http://handlebarsjs.com/