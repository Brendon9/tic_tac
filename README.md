# R3PI Tic Tac Toe

View the application live at https://r3pi-ttt.herokuapp.com

## Built with

That app includes the next components:

- [Ruby on Rails](https://github.com/rails/rails/commits/master) 5.1.2 API
- React/Redux View Layer
- PostgreSQL database
- ENV variables configuration ([Dotenv](https://github.com/bkeepers/dotenv))
- [Puma](http://puma.io/) as a web server

Check the Gemfile for other packages

## How to use

#### Installation

These instructions assume you have already completed setting up your local development environment with rvm.
There is a rvm `.ruby-gemset` in the repo root that will create a gemset named marketplace.

Clone the repo
`git clone git@github.com:Brendon9/tic_tac.git`

Create the database, run migrations
```ruby
bin/setup
```

If running again or on the remote server where the database already exists

```ruby
rails db:migrate
```

Start the server

```
bin/server
```

## Feature Matrix

#### Tic Tac Toe Baseline

- [x] single player mode,
- [x] multi player mode,
- [x] AI uses a random pattern to select tiles
- [x] uses the API to save the winning games

#### Good to Great

- [ ] more API integration
- [ ] Minimax Algorithm with a difficulty slider for the AI
- [ ] variable board size to keep the game interesting
- [ ] more game statistics than just number of winning games
