//Hello Soloistss

# Closerly

****ONLY THE USAGE INSTRUCTIONS BELOW ARE UPDATED IN THIS FILE****

> Pithy project description

## Team

  - __Product Owner__: teamMember
  - __Scrum Master__: teamMember
  - __Development Team Members__: Jason, Dianna, Shak, Brian, Fan Death.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

 First Run:  npm install
 Then Run:   npm run build
 Then Run:   npm run build:prod
 You might see an error in the console when running npm run build, it will look like:
 TS2307: Cannot find module './app.module.ngfactory'
 disregard this error.  It's related to npm run build:prod.  the ngfactor file is created and deleted.
 You will likely continue to see that error indefinitely when your build process is restarted.

 In order to run the site, you must have a terminal window open running a MongoDB server instance
 
 You must also change update the code in app.js OR in database/config, this is where the location and port of the mongoDB database is specified.  It's currently pointed towards a remote mongo instance used by the dev team.

 You must also have a terminal window open running the npm run build process.
 Leave that process running and then in a new terminal window, run:  npm start


 You should now be able to access the site at:  localhost:3000

 All new components that are created must be imported into the app.module.ts file.  
 You do not need to import other files into every component file.
 The app.module file is the storehouse of all the app files and it makes them available to all other components.
 In some instances you DO need to do imports in components.  But regardless, register every new file / service / directive / etc in the app.module file or it will not be available to the app and you will get errors when you run npm run build telling you that it can't locate the components you are trying to reference.



 When you run npm run build, you might have an error pertaining to

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
