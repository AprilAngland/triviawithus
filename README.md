# Seeding

- for production run heroku run bash first
- npm run seed-users
- npm run seed-questions

# Sending invitation

- Be careful to only run it once!!
- edit mailing list in script/Invitation.js
- npm run invitation

# Heroku PGBackups

- Creating a backup

  - heroku pg:backups:capture --app triviawithus

- Checking backup status and find out versions of the backups

  - heroku pg:backups --app triviawithus
  - heroku pg:backups:info [b101] --app triviawithus

- Restoring backups
  - heroku pg:backups:restore [b101] DATABASE_URL --app triviawithus

More info here https://devcenter.heroku.com/articles/heroku-postgres-backups#creating-a-backup

## Start

Running `npm run start-dev` and visit app on http://localhost:8080/

## Deployment

Push branch to master and Run `npm run deploy` to visit deployed app at https://triviawithus.herokuapp.com/

# Github Repository

https://github.com/tianxinAngland/triviawithus
