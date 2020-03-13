'use strict'

const db = require('../server/db')
const {
  User,
  Menu,
  TriviaHimHer,
  TriviaGuessNumber,
  TriviaMultiChoice,
  TriviaTrueFalse
} = require('../server/db/models')
require('../secrets')

async function seedUserMenu() {
  await db.sync({force: true})
  // await db.sync()

  console.log('db synced!')
  User.truncate({restartIdentity: true, cascade: true})
  const users = await Promise.all([
    User.create({
      email: process.env.ADMIN1_EMAIL,
      password: process.env.ADMIN1_PASSWORD,
      type: 'admin'
    }),
    User.create({
      email: process.env.ADMIN2_EMAIL,
      password: process.env.ADMIN2_PASSWORD,
      type: 'admin'
    }),
    User.create({
      email: process.env.GUEST1_EMAIL,
      password: process.env.GUEST1_PASSWORD
    }),
    User.create({
      email: process.env.GUEST2_EMAIL,
      password: process.env.GUEST2_PASSWORD
    }),
    User.create({
      email: 'guest1@guest.cn',
      password: '122115',
      language: 'CN'
    }),
    User.create({
      email: 'guest2@guest.cn',
      password: '122115',
      language: 'CN'
    }),
    User.create({
      email: 'guest3@guest.cn',
      password: '122115',
      language: 'CN'
    }),
    User.create({
      email: 'guest5@guest.cn',
      password: '122115',
      language: 'CN'
    }),
    User.create({
      email: 'guest4@guest.cn',
      password: '122115',
      language: 'CN'
    }),
    User.create({
      email: 'guest6@guest.cn',
      password: '122115',
      language: 'CN'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seedUserMenu()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
