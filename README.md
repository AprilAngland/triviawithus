# Summary

This app is an interactive trivia tool for party and events. It is to be used at the author Tianxin's own wedding reception.

<p align="center">
  <img src="public/ReadmeWelcome.png" width="80vw" title="hover text">
</p>

## Event Logistic - before the event

Guests will receive an invitation to the website, guest can login with their google account, view menu, make menu selection and update other information such us dietary restrictions.

## Interactive Trivia - at the event

Host will run through a list of trivia questions, and guests will be prompted to make their answer on their phone. The votes' name will be shown on the host's big screen and

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
- Edit mailing list in script/InvitationPublic.js and rename the file as Invitation.js
- Edit the email template in public/Invitation.html
- Run the below command to send out invitation

```
npm run invitation
```

# Heroku PGBackups

- Creating a backup

```
heroku pg:backups:capture --app triviawithus
```

- Checking backup status and find out versions of the backups

```
heroku pg:backups --app triviawithus
heroku pg:backups:info [b101] --app triviawithus
```

- Restoring backups

```
heroku pg:backups:restore [b101] DATABASE_URL --app triviawithus
```

More info here https://devcenter.heroku.com/articles/heroku-postgres-backups#creating-a-backup
