----------------------------------------------------
#Closerly
----------------------------------------------------
Project Description:

This app helps people have better relaitonships.  Relationships are hard, you have a busy life.  The app keeps track of the things you can’t and makes intelligent recommendations that help you have better relationships. 

The app monitors the current health of a relationship and makes predictions as to its trajectory.  Through consistent user input (on both side of the relationship), activity tracking, and big data analysis (across our user base), identifies common antipatterns and trends in your relationships that have an adverse effect and suggests actions and content in order to help steer the relationship towards success.

----------------------------------------------------
#Team
----------------------------------------------------

  - __Development Team Members__: Jason, Dianna, Shak, Brian, Fan Death.


----------------------------------------------------
## Table of Contents
----------------------------------------------------

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Proposed Feature List](#proposed)
3. [Recommended Resources](#proposed)

----------------------------------------------------
#Usage
----------------------------------------------------

Here is a step-by-step guide on how the base files of this project were set up:
https://docs.google.com/document/d/1gzaNpNx7oqeqkYrexrr2sQDFHiA0d4qq5vFWIQNLfX4/edit?usp=sharing

Once the repo is cloned down.

 First Run:  npm install
 Then Run:   npm run build
 Then Run:   npm run build:prod
 You might see an error in the console when running npm run build, it will look like:
 TS2307: Cannot find module './app.module.ngfactory'
 disregard this error.  It's related to npm run build:prod.  the ngfactor file is created and deleted.
 You will likely continue to see that error indefinitely when your build process is restarted.

 Also, npm run build:prod may have hiccups.  There might still be bugs in that process.

 In order to run the site, you must have a terminal window open running a MongoDB server instance
 
 You must also change update the code in app.js OR in database/config, this is where the location and port of the mongoDB database is specified.  It's currently pointed towards a remote mongo instance used by the dev team.

 You must also have a terminal window open running the npm run build process.
 Leave that process running and then in a new terminal window, run:  npm start


 You should now be able to access the site at:  localhost:3000

 All new components that are created must be imported into the app.module.ts file.  
 You do not need to import other files into every component file.
 The app.module file is the storehouse of all the app files and it makes them available to all other components.
 In some instances you DO need to do imports in components.  But regardless, register every new file / service / directive / etc in the app.module file or it will not be available to the app and you will get errors when you run npm run build telling you that it can't locate the components you are trying to reference.


----------------------------------------------------
#Requirements
----------------------------------------------------

Look at the package.JSON.  Many of the versions of technologies are specific and not necessarily the latest versions.  Be aware of the versions used.


----------------------------------------------------
#Proposed Feature List
----------------------------------------------------

Full List Here:  
https://docs.google.com/document/d/17_-rFUix_ywjJAuJPG22lq38rKQJpcGcPF-oTC3fHfY/edit?usp=sharing


----------------------------------------------------
#Recommended Resources
----------------------------------------------------

HIGHLY RECOMMENDED TUTORIAL:

Doing this tutorial will make an IMMENSE impact on your understanding of this project and your ability to contribute to it:  

https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/

--------

MORE:

MongoDB Schema Design
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1

Emmet - HTML abbreviations for Sublime
https://docs.emmet.io/abbreviations/syntax/

Filter results for ngFor using Pipes
https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor

http://blog.angular-university.io/angular-2-ngfor/

Refactoring AngularJS apps to component Style
https://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html

Passing variables / data to nested components
https://www.themarketingtechnologist.co/building-nested-components-in-angular-2/

Using Multiple Routers and Router Outlets
http://onehungrymind.com/named-router-outlets-in-angular-2/

This (solutions #2) solved my .DS_Store problem!
https://www.jeffgeerling.com/blogs/jeff-geerling/stop-letting-dsstore-slow-you

Using ngFor, formerly ng-repeat
http://blog.angular-university.io/angular-2-ngfor/

Passing data between components using @Input
https://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2016/12/13/communication-between-components-using-input-in-angular-2.aspx

Creating custom directive to bind variables to pass to event handlers
https://stackoverflow.com/questions/39927101/cant-bind-to-color-since-it-isnt-a-known-property-of-button

https://stackoverflow.com/questions/28459975/mean-stack-angular-routing-vs-express-routing

https://stackoverflow.com/questions/40073941/whats-the-difference-between-an-angular-component-and-module


