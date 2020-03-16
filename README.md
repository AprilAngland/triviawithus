# Summary

This app is an interactive trivia tool for party, events, etc. It is build to the author Tianxin's own wedding reception. There are two types of users: guest and host. Host will have access to a list of trivia questions from the database

## Event Logistic

Guests will

## Interactive Trivia

# Running the tool

To test ot this project on your computer, please complete these steps:

- Fork and clone this repo

```
git clone https://github.com/tianxinAngland/triviawithus/
```

- Run the below command to install required packages

```
npm install
```

- Create database and seed dummy data

```
createdb triviawithus
npm run seed
```

- Start app

```
npm run start-dev
```

- visit app on http://localhost:8080/

- You can also visit the deployed app at https://triviawithus.herokuapp.com/

# Testing

## Seeding real data

- Edit file /script/seedQuesions.js to add fun questions to the app
- Run the below command and seed the tool with fun questions!

```
npm run seed-questions
```

# Sending invitation

- Be careful to only run it once!!
- edit mailing list in script/InvitationPublic.js rename the file into Invitation.js
- edit the email template in public/Invitation.html
- Run the below command to send out invitation

```
npm run invitation
```

# Heroku PGBackups

- Creating a backup

  - heroku pg:backups:capture --app triviawithus

- Checking backup status and find out versions of the backups

  - heroku pg:backups --app triviawithus
  - heroku pg:backups:info [b101] --app triviawithus

- Restoring backups
  - heroku pg:backups:restore [b101] DATABASE_URL --app triviawithus

More info here https://devcenter.heroku.com/articles/heroku-postgres-backups#creating-a-backup
