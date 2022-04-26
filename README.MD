## ASCII ART GREETS IN UNIX SHELL :star_struck:
------------------------------

#### Requirements

Make sure that your have Node and NPM installed before starting.

* Unix based shell (Mac, Linux, WSL, etc.)
* [Node & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [ascii-art npm package](https://npm.io/package/ascii-art)


## USAGE
--------

Within the cloned project folder, install the required dependencies by running:

    npm i

## CHANGING FONTS
-----------------

ASCII art package supports fonts from [Figlet](https://www.figlet.org/).
You can download and add a Figlet font to the **node_modules/ascii-art-font/Fonts**

Once added, you can reference the font in the font array 
or directly if not using rand fonts.

## RUN ON TERMINAL SHELL OPEN
-----------------

In order to run when your shell window opens,
add an execution script to your startup shell file (i.e. bash, zsh, etc.)!

i.e. node ~/path_to_project_index.js

Add your greets to the array in **data > index.js**