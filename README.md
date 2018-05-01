----------------------------------------------------
#enGauged
----------------------------------------------------
Description:

This repo is a MVP Proof of Concept for a relationship health-tracker application.  The app is intended to help people have better relationships.  Relationships are hard, you have a busy life.  The app keeps track of the things you can’t and makes intelligent recommendations that help you have better relationships. 

The app monitors the current health of a relationship and makes predictions as to its trajectory.  Through consistent user input (on both side of the relationship), activity tracking, and big data analysis (across the user base), identifies common antipatterns and trends in your relationships that have an adverse effect and suggests actions and content in order to help steer the relationship towards success.

This repo, being experimental, may contain extraneous code / files.  We had an aggressive timeline and were focused on trying various different implementations.

----------------------------------------------------
#Development Status
----------------------------------------------------
Having satisfied proof-of-concept, the enGauged team is currently developing version 1.0 (in a new, private repo), which has been coded from-scratch and will have a substantially expanded feature set, utilize additional technologies not used in the proof-of-concept, and will be a fully-featured PWA.


Expected release:  July 2018

----------------------------------------------------
#Team
----------------------------------------------------

  - __Development Team __: Brian, Jason, Dianna, Shak.


----------------------------------------------------
#Usage
----------------------------------------------------

Keep in mind.  This is an MVP Proof Of Concept.  It does not contain a production-ready version of the application.  There are known issues with this version that will not be resolved.

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


