'use strict'

const db = require('../server/db')
const {
  Menu,
  TriviaHimHer,
  TriviaGuessNumber,
  TriviaMultiChoice,
  TriviaTrueFalse
} = require('../server/db/models')
require('../secrets')

// eslint-disable-next-line max-statements
async function seedGames() {
  await db.sync()

  const TriviaHimHer1 = await TriviaHimHer.findOne({where: {id: 1}})
  TriviaHimHer1.text = 'Who steals apple pie at night?'
  TriviaHimHer1.ans = 'Her'
  await TriviaHimHer1.save()
  console.log('triviaHimHer1  updated')

  const TriviaHimHer2 = await TriviaHimHer.findOne({where: {id: 2}})
  TriviaHimHer2.text = 'Who is the blanket thief?'
  TriviaHimHer1.ans = 'Him'
  await TriviaHimHer2.save()
  console.log('triviaHimHer2  updated')

  const TriviaHimHer3 = await TriviaHimHer.findOne({where: {id: 3}})
  TriviaHimHer3.text = 'Who is more opinionated about how to make rice'
  TriviaHimHer1.ans = 'Him'
  await TriviaHimHer3.save()
  console.log('triviaHimHer3  updated')

  const TriviaHimHer4 = await TriviaHimHer.findOne({where: {id: 4}})
  TriviaHimHer4.text = 'Who is better at math'
  TriviaHimHer1.ans = 'Her'
  await TriviaHimHer4.save()
  console.log('triviaHimHer4  updated')

  const TriviaHimHer5 = await TriviaHimHer.findOne({where: {id: 5}})
  TriviaHimHer5.text = 'Who is a better chef'
  TriviaHimHer1.ans = 'Him'
  await TriviaHimHer5.save()
  console.log('triviaHimHer5  updated')

  const TriviaHimHer6 = await TriviaHimHer.findOne({where: {id: 6}})
  TriviaHimHer6.text = 'Who is the bad cop'
  TriviaHimHer1.ans = 'Him'
  await TriviaHimHer6.save()
  console.log('triviaHimHer6  updated')

  const TriviaHimHer7 = await TriviaHimHer.findOne({where: {id: 7}})
  TriviaHimHer7.text = 'Who likes disney'
  TriviaHimHer1.ans = 'Her'
  await TriviaHimHer7.save()
  console.log('triviaHimHer7  updated')

  const TriviaHimHer8 = await TriviaHimHer.findOne({where: {id: 8}})
  TriviaHimHer8.text = 'Who sings more'
  TriviaHimHer1.ans = 'Him'
  await TriviaHimHer8.save()
  console.log('triviaHimHer8  updated')

  // TriviaTrueFalse.truncate({restartIdentity: true, cascade: true})
  // const triviatruefalses = await Promise.all([
  //   // TriviaTrueFalse.create({
  //   //   text: 'John ordered Asian Stir Fry more often than April',
  //   //   translation: '天天向上',
  //   //   ans: 'true'
  //   // }),
  //   // TriviaTrueFalse.create({
  //   //   text:
  //   //     'April and John watched the final episode of Game of Throne Together',
  //   //   translation: '天天向上',
  //   //   ans: 'true'
  //   // }),

  // console.log(`seeded ${triviatruefalses.length} triviatruefalses`)
  // console.log(`seeded successfully`)
  // TriviaGuessNumber.truncate({restartIdentity: true, cascade: true})
  // const triviaguessnumber = await Promise.all([
  //   // TriviaGuessNumber.create({
  //   //   text: 'How many days between the first date and the wedding',
  //   //   translation: '天天向上',
  //   //   ans: 0
  //   // }),
  //   // TriviaGuessNumber.create({
  //   //   text: 'How many days between the first date and the proposal?',
  //   //   translation: '天天向上',
  //   //   ans: 0
  //   // }),
  //   // TriviaGuessNumber.create({
  //   //   text: 'How many days between the first date and the city hall wedding',
  //   //   translation: '天天向上',
  //   //   ans: 100
  //   // }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaGuessNumber.create({
  //     text: 'TriviaGuessNumber Dummy Question',
  //     translation: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   })
  // ])

  // console.log(`seeded ${triviaguessnumber.length} triviaguessnumber`)
  // console.log(`seeded successfully`)
  // TriviaMultiChoice.truncate({restartIdentity: true, cascade: true})
  // const triviamultichoice = await Promise.all([
  //   // TriviaMultiChoice.create({
  //   //   text: 'What was the criteria John used to pick first date restaurant?',
  //   //   translation: '首次约会john选择餐馆的标准是什么？',
  //   //   text1: 'He likes the restaurant to be quite so it allows conversation',
  //   //   translation1: '他问女生喜欢什么菜系',
  //   //   text2: 'He picks the restaurant near his aparment to save commute',
  //   //   translation2: '他选离家近的,省的麻烦',
  //   //   ans: 0
  //   // }),
  //   // TriviaMultiChoice.create({
  //   //   text: 'What did John and April eat at first date?',
  //   //   text1: 'Spanish tapa, sangria',
  //   //   text2: 'Japanese Bento, green tea crepe cake',
  //   //   text3: 'Sushi, sashimi and black sesame ice cream',
  //   //   translation: '首次约会John和April吃了什么？',
  //   //   translation1: '西班牙小食， 水果酒',
  //   //   translation2: '日式便当，绿茶千层蛋糕',
  //   //   translation3: '寿司，黑芝麻冰淇淋',
  //   //   ans: 0
  //   // }),
  //   // TriviaMultiChoice.create({
  //   //   text1: 'How many days between the first date and the city hall wedding',
  //   //   translation1: '天天向上',
  //   //   ans: 100
  //   // }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question ',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   }),
  //   TriviaMultiChoice.create({
  //     text: 'TriviaMultiChoice Dummy Question',
  //     translation: '天天向上',
  //     text1: 'TriviaMultiChoice Dummy Question Option 1',
  //     translation1: '天天向上',
  //     text2: 'TriviaMultiChoice Dummy Question Option 2',
  //     translation2: '天天向上',
  //     text3: 'TriviaMultiChoice Dummy Question Option 3',
  //     translation3: '天天向上',
  //     ans: 0,
  //     type: 'dummy'
  //   })
  // ])

  // console.log(`seeded ${triviamultichoice.length} triviamultichoice`)
  // console.log(`seeded successfully`)
}

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
if (module === require.main) {
  runSeed()
}
