# Unirede Client

## Summary
Unirede Client is a simple frontend solution to register users !

The system was developed with docker.
Reason: to build something similar to the use of microservices (in the future).
But why? To maintain isolated services that perform only their functions. In addition, this type of architecture generates less dependence between the diverse teams involved in the development and better infrastructure management.

The SPA was developed using Reactjs and React-Router.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

To help run in terminal:
```
make help
```

### Prerequisites

Before all, you need to have Docker and Docker compose installed in your computer.
For more informations you can access [Docker page](https://www.docker.com/).

### Installing

After clone, run in terminal:
```
make setup
```

### Running the locally

After install, run in terminal:
```
make run
```
After this, you can access the app in http://localhost:3000/.
obs.: To test this app you need to run in localhost the [Unirede-API](https://gitlab.com/MagnunAVF/unirede-api).


## Deployment

TODO:
* MVP => Prod configs to deploy in Heroku

## Contributing

* Only have to fork the project and make a pull request.

## Git Style

We use something like [Karma](http://karma-runner.github.io/1.0/dev/git-commit-msg.html) for commit messages.
Besides this, for new branchs use names in this format:
```
type/description
```
For example: to create a new branch that is responsible for create user permissions you must use feat/create-user-permissions.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

Not yet defined.

## Final Notes
Future improvements (TODO):
* Improve forms validation;
* Refactor to improve code reuse;

Last worked branch: master

Doubts? Problems? send an email to magnunavf@gmail.com