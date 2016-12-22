# Gulper

Basic gulp starter.

### Install & Serve

1. Install gulp globally `npm i gulp -g` just to be safe.
1. Run `npm i`
1. Watch and serve with `gulp`

### Importing SCSS
Take special note of the includePaths option in the styles task. This gives you the ability to import resources like you'd see with codepen's 'need a add-on' button in the css/scss settings tab. 

Install any SCSS friendly package with NPM and include the path to the parent folder of the project's main scss file (or whatever file you want to include.) Then import it with your own scss file using `@import "name_of_scss_file.scss"`. Normalize-SCSS is included as a basic example. 

If you're using Webstorm, the imports from node_modules will throw pesky warnings. To remove the errors, go to settings > directories, navigate to the same parent directory you are importing from and add the folder as a resource root. Vuala, warning EXTINGUISHED. 

### Minify CSS
The default task doesn't include minification to keep debugging simple. You can run `gulp minify-css` to create a minified copy. 
