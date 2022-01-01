This project has a React frontend and a Rails backend API together. Below are the setup instructions:

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Environment Setup

### Install the Correct Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

If it's not 2.7.4, you can use `rvm` to install of Ruby version 2.7.4:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler`:

```sh
gem install bundler
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

This project uses postgreSQL as the backend relation database system. Please install postgreSQL by following the below instructions:

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][postgres downloads page] and install it. Launch the
  app and click "Initialize" to create a new server. You should now be able to
  run `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.


[postgres downloads page]: https://postgresapp.com/downloads.html
[heroku rails deploying guide]: https://devcenter.heroku.com/articles/getting-started-with-rails6
[troubleshooting guide on heroku]: https://devcenter.heroku.com/articles/getting-started-with-rails6#troubleshooting


## Setup

Clone the repo from github:

```console
# Clone this repository
$ git clone https://github.com/rmorales723/FinalProject.git
# Go into the repository
$ cd FinalProject
```

When you're ready to start building your project, run:

```sh
# Install dependencies
bundle install
npm install --prefix client

# Create and migrate the database
rails db:create
rails db:migrate
```

You can seed the database by running the following command:

```sh
rails db:seed
```

You can use the following commands to run the application:

- `bundle exec rails s`: run the backend API server on [http://localhost:3000](http://localhost:3000)
- Open a new terminal tab and run: `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Project Description
Short description about the project
This project creates appointments for clients that personal training with a specific trainer.....

# Clients page

The react front end of the project has a clients page and here is a screenshot of the clients page:

![clients-page](https://user-images.githubusercontent.com/72527380/147842837-105e1ad7-fd4e-473c-a6aa-8ec7b0ece671.png)

We have a Clients react component that makes a fetch API call to the Rails backend API to fetch all the clients data that are present in the database, and then displays each client in the UI. We have a Client react component to render each client data in the UI.

We have a StarRating component to show the rating for each client. The logged in user (Trainer) can click on a specific star to update the rating for that particular client. It makes a fetch API call (PUT type) and updates the rating of the corresponding client in the database and displays the updated rating star in the UI.

We have EDIT and DELETE buttons that give the signed in user the ability to edit a client information and delete the client.

## Trainer, Client, Appointment

