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
This project creates appointments for clients with a personal trainer.

 # Sign Up Page

The react front end of the project has sign up page and here is a screenshot of the sign up page:

![signup-page](https://user-images.githubusercontent.com/72527380/148007887-445b7932-a649-4a7c-8977-12296b2aa716.png)

We have `Signup` react component that posts the user typed data for the user being created (signed up) from the frontend to the Rails backend API. It lets the user add the user information (e.g. name, username, password, skill, credential etc.).

When the user hits the `Sign Up` button after typing the user information, it makes a `POST /signup` API call to the backend Rails API with the user information in the request body and the user record is created and saved in the backend database. And, the user is also logged into the application. We use `localStorage` to store the current user information to identify the currently signed in user.

 # Login Page

The react front end of the project has log in page and here is a screenshot of the log in page:

![Home-page](https://user-images.githubusercontent.com/72527380/148009305-0ee9fcc4-b7ed-4b92-91c0-06486b440f08.png)

We have `Login` react component that posts the user typed data for the user being logged in from the frontend to the Rails backend API. It lets the user type the username and password.

When the user hits the `Login` button after typing the user information, it makes a `POST /login` API call to the backend Rails API with the user information in the request body and the user is authenticated using their username and password. If the user types the username and password correctly, the API returns the 200 OK response along with the user information. If the user typed the username/password wrong, then the API returns an `unauthorized` response. When the user is logged into the application successfully, we use `localStorage` to store the current user information to identify the currently signed in user.

We use `UnAuthenticatedApp` react component to display the `Sign Up` and `Login` options to the user when they visit the homepage of the application. When the user is logged in successfully, we use `AuthenticatedApp` react component to render the application.

# Clients page

The react front end of the project has a clients page and here is a screenshot of the clients page:

![clients-page](https://user-images.githubusercontent.com/72527380/148449195-1f2769b8-d439-4e32-bb13-c0a7764ee707.png)

We have a `Clients` react component that makes a fetch API call (`GET /clients`) to the Rails backend API to fetch all the clients data that are present in the database, and then displays each client in the UI. We have a Client react component to render each client data in the UI.

We have a `StarRating` component to show the rating for each client. The logged in user (Trainer) can click on a specific star to update the rating for that particular client. It makes a fetch API call (PUT type) and updates the rating of the corresponding client in the database and displays the updated rating star in the UI.

We have `EDIT` and `DELETE` buttons that give the signed in user the ability to edit a client information and delete the client.

When the user clicks on the `DELETE` button, it makes a `DELETE` request to the Rails backend API and deletes the client record from the database.

 # Add Client page

The react front end of the project has an add client page and here is a screenshot of the add client page:

![add-client-page](https://user-images.githubusercontent.com/72527380/148011152-3be4c06d-10d3-4f96-85db-c65d375fc7e8.png)

We have a `NewClient` react component that posts the user typed data for the client being created from the frontend to the Rails backend API. It lets the logged in user add the client information (e.g. client name, number, email and img_url etc.).

When the user hits the Submit button after typing the client information, it makes a `POST /clients` API call to the backend Rails API with the client information in the request body and the client record is created and saved in the backend database.

# Client EDIT page:

The following screenshot shows the client edit page:

![edit-client-page](https://user-images.githubusercontent.com/72527380/148011172-2bd55df5-15ec-42d7-b854-7e4a929e9290.png)

We have `EditClient` react component that fetches the current data for the client being edited from the backend Rails API. And, then it lets the logged in user edit the client information (e.g. name, number, email, img_url etc.). When the user hits the Submit button, it makes a fetch (`PATCH clients/:id`) API call to the backend Rails API with the edited client information in the request body and the client data is updated in the backend database accordingly.

 # Appointments page

 The react front end of the project has a appointments page and here is a screenshot of the appointments page:

![appointments-page-2](https://user-images.githubusercontent.com/72527380/150889996-a7af76e4-1a09-41c5-a9d1-02d852f4499c.png)

We have a `AppointmentsContainer` react component that makes a fetch API (`GET /appointment`) call to the Rails backend API to fetch all the appointments data that are present in the database, and then displays each appointment in the UI. We have an `Appointment` react component to render each appointment data in the UI.

Implemented React mailer to send a confirmation email with the name, date, and time to the client confirming the appointment scheduled.

We have `EDIT` and `DELETE` buttons that give the signed in user the ability to edit a appointment information and delete the appointment. 

When the user clicks on the `DELETE` button, it makes a `DELETE /appointments/:id` request to the Rails backend API and deletes the appointment record from the database.

 # Add Appointment page

The react front end of the project has an add appointment page and here is a screenshot of the add appointments page:

![add-appointment-page](https://user-images.githubusercontent.com/72527380/148011222-f74267ee-5f7c-4842-995e-b989989f5b36.png)

We have an `AppointmentForm` react component that posts the current data for the appointment being added from the frontend to the Rails backend API. It lets the logged in user add the appointment information (e.g. client name, date, and time).

We have `ClientsDropdown` react component that is used inside the `AppointmentForm` react component to display all the available clients from the Rails backend API.

And, we are using `Calendar` component from the `react-calendar` library to display the calendar and let the user select a date for the appointment from the calendar.

We have `TimeSelectDropdown` react component that is used inside the `AppointmentForm` react component to display all the available time options and selecting the time for the appointment.

When the user hits the Submit button after choosing the appointment information, it makes a `POST /appointments` API call to the backend Rails API with the appointment information in the request body and the appointment record is created and saved in the backend database.

# Appointment EDIT page:

The following screenshot shows the appointment edit page:

![edit-appointment-page](https://user-images.githubusercontent.com/72527380/148011239-6813b22a-345f-461a-b8ea-e2ca4a2cad30.png)

We have `EditAppointment` react component that fetches the current data for the appointment being edited from the backend Rails API. And, then it lets the logged in user edit the appointment information (e.g. client name, date, and time). When the user hits the Submit button, it makes a fetch (`PATCH /appointments/:id`) API call to the backend Rails API with the edited appointment information in the request body and the appointment data is updated in the backend database accordingly. We re-used all the 3 components here inside the `EditAppointment` react component (`ClientsDropdown`, `Calendar` and `TimeSelectDropdown`) that were used and described in the `AppointmentForm` react component section above.
