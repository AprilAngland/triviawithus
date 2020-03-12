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

async function seedGames() {
  // TriviaHimHer.destroy({
  //   where: {},
  //   truncate: true
  // })
  await db.sync()
  TriviaHimHer.truncate({restartIdentity: true, cascade: true})
  const triviahimhers = await Promise.all([
    // TriviaHimHer.create({
    //   text: 'Who steals apple pie at night?',
    //   translation: '天天向上',
    //   ans: 'her'
    // }),
    // TriviaHimHer.create({
    //   text: 'Who is the blanket thief?',
    //   translation: '天天向上',
    //   ans: 'him'
    // }),
    // TriviaHimHer.create({
    //   text: 'Who is a couch potato?',
    //   translation: '天天向上',
    //   ans: 'her'
    // }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    })
  ])
  console.log(`seeded ${triviahimhers.length} triviahimhers`)
  console.log(`seeded successfully`)

  TriviaTrueFalse.truncate({restartIdentity: true, cascade: true})
  const triviatruefalses = await Promise.all([
    // TriviaTrueFalse.create({
    //   text: 'John ordered Asian Stir Fry more often than April',
    //   translation: '天天向上',
    //   ans: 'true'
    // }),
    // TriviaTrueFalse.create({
    //   text:
    //     'April and John watched the final episode of Game of Throne Together',
    //   translation: '天天向上',
    //   ans: 'true'
    // }),
    // TriviaTrueFalse.create({
    //   text: 'April is the better chef',
    //   translation: '天天向上',
    //   ans: 'false'
    // }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    })
  ])

  console.log(`seeded ${triviatruefalses.length} triviatruefalses`)
  console.log(`seeded successfully`)
  TriviaGuessNumber.truncate({restartIdentity: true, cascade: true})
  const triviaguessnumber = await Promise.all([
    // TriviaGuessNumber.create({
    //   text: 'How many days between the first date and the wedding',
    //   translation: '天天向上',
    //   ans: 0
    // }),
    // TriviaGuessNumber.create({
    //   text: 'How many days between the first date and the proposal?',
    //   translation: '天天向上',
    //   ans: 0
    // }),
    // TriviaGuessNumber.create({
    //   text: 'How many days between the first date and the city hall wedding',
    //   translation: '天天向上',
    //   ans: 100
    // }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    })
  ])

  console.log(`seeded ${triviaguessnumber.length} triviaguessnumber`)
  console.log(`seeded successfully`)
  TriviaMultiChoice.truncate({restartIdentity: true, cascade: true})
  const triviamultichoice = await Promise.all([
    // TriviaMultiChoice.create({
    //   text: 'What was the criteria John used to pick first date restaurant?',
    //   translation: '首次约会john选择餐馆的标准是什么？',
    //   text1: 'He likes the restaurant to be quite so it allows conversation',
    //   translation1: '他问女生喜欢什么菜系',
    //   text2: 'He picks the restaurant near his aparment to save commute',
    //   translation2: '他选离家近的,省的麻烦',
    //   ans: 0
    // }),
    // TriviaMultiChoice.create({
    //   text: 'What did John and April eat at first date?',
    //   text1: 'Spanish tapa, sangria',
    //   text2: 'Japanese Bento, green tea crepe cake',
    //   text3: 'Sushi, sashimi and black sesame ice cream',
    //   translation: '首次约会John和April吃了什么？',
    //   translation1: '西班牙小食， 水果酒',
    //   translation2: '日式便当，绿茶千层蛋糕',
    //   translation3: '寿司，黑芝麻冰淇淋',
    //   ans: 0
    // }),
    // TriviaMultiChoice.create({
    //   text1: 'How many days between the first date and the city hall wedding',
    //   translation1: '天天向上',
    //   ans: 100
    // }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question ',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    })
  ])

  console.log(`seeded ${triviamultichoice.length} triviamultichoice`)
  console.log(`seeded successfully`)
}

// async function seed() {
//   await seedGames()
// }
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seedGames()
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
