# Speedy Components

## Under heavy development

Only some of the components demoed here are actually integrated into the LBG speedy codebase.

### An AngularJs library for the speedy project to extend apon the CapitalOne Hygieia Project.

This is a collection of components, modules, services and directives that extend the functionality of the Hygieia project.  The library utilises ES6 features and is transpiled using webpack. 

It also includes an exmple app to showcase some of the components.

The library includes upstream work done by a separate Sapient team as a dependency.

![Code Coverage-shield-badge-1](https://img.shields.io/badge/Code%20Coverage-57.69%25-red.svg)

To run tests
```
npm run test
```

To run tests with watch
```
npm run test-watch
```

To build
```
npm run build
```

## Kitchen sink

Demo showing all components 

Live example
[Kitchen sink demo](https://jozzhart.github.io/speedy-components/example/#/sink)

To run locally
```
npm run start
```

## Chat bot

Chat bot uses the [Iky framework](https://github.com/alfredfrancis/ai-chatbot-framework), an AI powered conversational dialog interface built in Python..  The framework includes a admin UI to manange intents, conversations etc.  The UI component interacts with the framework via a restful API.

Set up the chatbot framework

```
mkdir chatbot
git clone https://github.com/alfredfrancis/ai-chatbot-framework ./chatbot
cd chatbot
docker-compose up
docker-compose exec iky_backend python manage.py init
```

You can see the admin interface at
```
http://localhost:8080/
```

Which will allow you to import intents from this repo in chatbot/iky_intents.json

Then go to 
```
http://localhost:8000/#/team-dashboard
```



