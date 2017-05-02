[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## WDI-Project-Two

The inspiration for this project came during the code retreat.  While googling Conway's Game of life I saw some really cool animations. 

I wanted to create an app that would let users create a board and animate it following rules similar to Conway's game of life.

The app name came late in the devolpment process, which is why this repo has a generic title.  The title 'Shoop' is named after the Salt-N-Pepa song of the same name.  It was both one of my favorite songs growing up, and the sound I kept making while watching the board blink at me.


The primary goals of this project where to:

1. Build a single-page-applicaiton that allows users to interact with the SHOOP api which stores information about SHOOP boards.
2. Allow the SHOOP boards to be animated by front-end javascript following specific rules

Link to SHOOP:

https://sjruby.github.io/wdi-client-project-two/index.html

Link to SHOOP API:

https://github.com/sjruby/shoop-api

## Technologies used:
  Ajax to interact with the bakend server
  jQuery to manipulate the DOM
  Javascript to animate the board, and process the requests from the server
  HTML to structure the board
  Bootstrap to simplify some of the formating/modals
  Handlebars to add and remove HTML as needed

  ## User Stories
  1. As a pro-shooper, I want to be able to generate new Shoop boards
  2. As a pro-shooper, I want to be able to save edits to exiting Shoop boards
  3.  As a pro-shooper, I want to be able to delete boards that I no longer need
  4.  As a pro-shooper, I want to make my boards SHOOP!!!

  ## Final Wireframe
  The final wire frame is below:
  [Imgur](http://i.imgur.com/zrKS71u.jpg?2)

  ## Approach to Building the App
  Step 1 - set up the authentication using the heroku server.  I figured I could leverage a lot of code form the tic-tac-toe authentication logic.

  Step 2 - Once that was set up on the front end I focused on creating the BOARDS table in server for me to perform CRUD Actions on.

  Step 3 - Set up the CRUD actions on BOARD w/o any authentication.

  Step 4 - Set up the front end to interact with the BOARD resource as needed.  After that was working I added the user authenticaton to the backend.  My thought was that once the front end was interacting with the BOARD resource as desired, authentication would be easy to plop ontop of it.  Plus if it caused errors, I would know exactly what the problem was.

  ## Pitfalls

  The biggest issue I had was getting Heroku set up initially.  I lost most of day 1 spinning Heroku up and down trying to get it to interact with the front end.  I thrashed at it and don't know what caused the problem or solved it!

  Spelling MATTERS! I didn't notice until I was half way through the projec that the key-value pair storing a cells value was misspelled as : "intialValue" instead of "initialValue".  I noticed b/c at one point I coded a few functions with the correct spelling and they bombed.  The final project has the incorrect spelling of initial, but works.

  ## Opportunites for Improvment

  Code clairty could be improved.  I did a much better job here than in project 1, but still have functions that are too long

  The biggest source of improvment for code clarity is probably naming things, and structuring the files.  My handlebars file names probably only make sense to me, and are not executed in the same places which may be confusing to someone picking this project up.

  HTML/CSS Layout, I messed around with flexbox and then droped trying to make the app adjust text/display for mobile devices.  I think CSS is still where I have the most trouble taking what is in my brain and translating it to concrete steps.

  I hamfisted the ERD on this project.  The BOARDS table only has two columns, ID, title,  and CELLS.  The Cells column is basically a Javascript object/array which I hammered into the data base using the "searlize" function to the object into JSON.  It's gross.  A better design would have a table for Boards and a related table for Cells.  My defense is that I had planed to do a blog app.  That would have a very similar ERD with a table for BLOGS that had columns for ID, title, and content.  The content in the blog case is also a long gross string.  Basically I just made my front end more complicated, and avoided difficulty on the back end by using searlize.  Not the best choice but hey I'm learning.

  ## Next Steps for Shoop

  I would like the user to be able to choose colors.

  I would like the user to be able to customize the animation rules based on a table the user updates on the front end page.
