#### Single-line Summary
**Today, Andrii, Joshua, and I (Christian) paired together. It took about 2 hours.**

#### Reflect and summarize on your process for each `TODO` item :  
  1. First, we started on getting the Handlebars cdn linked in, as well as recreating the previous template to a handlebars template, wrapped in a script tag. The most recent CDN was broken (version 4.something), so we had to use version 2.0.0. 
  2. Next, we focused on refactoring the .toHtml() method to render the handlebars template to the DOM. This required us to compile the template, and at the end of the method put: return template(this). 
  3. Next, we commented on why lexical arrow functions need parentheses around the parameters if it took more than one. 
  4. Finally, Joshua refactored the methods in articleView.js to lexical arrow functions, and explained the scoping implications of "this" in relation to them. 

#### Checklist (before submitting, fill in each set of square brackets with an 'x')
- [x] We have titled the Pull Request similar to our branch name (ex: 'brian-rick'). 
- [x] This PR includes commits from both myself and my partner; e.g. We followed good pair programming practices by switching driver/navigator roles.
- [x] There is no extraneous, unrelated code included in this PR.
- [x] We have summarized our `TODO:` process above.
