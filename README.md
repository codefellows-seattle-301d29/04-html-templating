![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 04: HTML Templating w/HandlebarsJS
===
## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/simple-validation-of-a-username-with-regex) and follow the submission instructions from Lab 01.

## Lab 04 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources
[Handlebars Docs](http://handlebarsjs.com/)

[Arrow Functions MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Configuration
_Your repository must include:_

```
04-templating
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── scripts
│   ├── article.js
│   ├── articleView.js
│   └── blogArticles.js
├── styles
│   ├── base.css
│   ├── fonts
│   │   ├── icomoon.eot
│   │   ├── icomoon.svg
│   │   ├── icomoon.ttf
│   │   └── icomoon.woff
│   ├── icons.css
│   ├── layout.css
│   └── modules.css
└── vendor
    └── styles
        └── normalize.css
```

## User Stories and Feature Tasks

- Continue styling the app using SMACSS practices. Take a few minutes for code review of your partner's CSS and decide how to incorporate it into your paired lab. You can choose one partner's CSS structure, or you can combine them as you see fit. Seek to optimize and organize your CSS as much as possible!

*As a user, I want my app to render articles with consistent formatting so that I can visit the site often and have the same experience each time.*

- Include the Handlebars.js CDN in your project to replace the `$.clone()` template.

*As a developer, I want to utilize the Handlebars library to dynamically render the articles using a template so that I can easily edit the way articles are rendered.*

- Convert your existing HTML template into a Handlebars template.
- Update the `Article.prototype.toHtml()` method to utilize the Handlebars template.

*As a developer, I want to utilize modern JavaScript features so that my code is up to date with industry standards.*

- Refactor the functions and methods in the code to use ES6 arrow functions where applicable.

### Stretch Goal
*As a developer, I want to use Handlebars to build my filters so that my code is more DRY.*

- Look at all that duplicated markup inside your `#filter` list items! Looks like a good opportunity to use a template. Make a small template for each filter, and re-render the list once you have data to populate it.

## Documentation
_Your README.md must include:_

```md
# Project Name

**Author**: Wyatt Pefley and Taylor Stemple
**Version**: 1.5.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
This assignment uses the Handlebar js library in order to dynamically generate blog articles based filters put in place by the user.
## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
1. Fork original repo
2. Copy repo to your local machine.
3. Read through the code and make sure you understand what each line is doing.
4. Follow the instructions carefully and comment code when asked as well.
## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Languages used:
1. JavaScript
2. HTML
3. CSS
Libraries Used
1. Handlebars JS
2. jQuery
We use HTML and CSS to provide the skeleton framwork of the app and used JS as the controller in which to generate content onto our model.
## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

1-12-18 9:05 - Created handlebar template
1-12-18 9:20 - Refactored functions into lexical arrow functions
1-12-18 9:40 - Compiled and rendered our articles
1-12-18 10:00 - tidy up/ Users stories/ README

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
Taylor Stemple - https://github.com/TrrLrr
-->
```
