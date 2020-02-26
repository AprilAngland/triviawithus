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

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

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
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const menus = await Promise.all([
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Maryland Crab Cakes with Creole Mayonnaise',
      translation: '马里兰蟹肉饼',
      category: 'ShellFish'
    }),
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Peking Duck Wraps with Scallions & Hoisin',
      translation: '北京烤鸭',
      category: 'Meat And Poultry'
    }),
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Artichoke and Mushroom Tartlets',
      translation: '朝鲜蓟蘑菇挞',
      category: 'Vegetarian'
    }),
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Maine Lobster Salad Appetizers ',
      translation: '缅因龙虾沙拉',
      category: 'ShellFish'
    }),
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Seared Tuna Spoons with Wasabi and Soy',
      translation: '芥末金枪鱼',
      category: 'Fish'
    }),
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Large Shrimp Cocktail with Spicy Cocktail Sauce',
      translation: '鸡尾酒虾仁',
      category: 'ShellFish'
    }),
    Menu.create({
      section: 'Hors D doeuvre',
      text: 'Smoked Salmon Tartare Jose Luis',
      translation: '生拌三文鱼',
      category: 'Fish'
    }),
    Menu.create({
      section: 'First course',
      text:
        'Fancy Greens with Cranberries, Pine Nuts, Montrachet & Fig Balsamic Vinaigrette',
      translation: '蔓越莓松子沙拉 + 香槟无花果意大利香醋调味汁',
      category: 'Vegetarian'
    }),
    Menu.create({
      section: 'First course',
      text:
        'Butternut Squash Soup with Black Beans, Caramelized Onions and Chives',
      translation: '黑豆南瓜粥',
      category: 'Vegetarian'
    }),
    Menu.create({
      section: 'Entree',
      text:
        'Atlantic Sea Bass with Lemon & Herbs + Baby Carrots and Asparagus Rosemary Roasted Potatoes',
      translation: '亚特兰大黑鲈鱼 + 胡萝卜 + 青笋 + 迷迭香土豆',
      category: 'Fish'
    }),
    Menu.create({
      section: 'Entree',
      text:
        'Leg of Lamb Italian Style with Garlic + Baby Carrots and Asparagus Rosemary Roasted Potatoes, Oregano and Lemon',
      translation: '意大利羊腿 + 胡萝卜 + 青笋 + 迷迭香土豆',
      category: 'Meat And Poultry'
    }),
    Menu.create({
      section: 'Entree',
      text: 'Roasted Vegetable risotto for vegetarians',
      translation: '蔬菜奶油焗饭',
      category: 'Vegetarian'
    }),
    Menu.create({
      section: 'Desserts',
      text:
        'Raspberries + Blackberries + Blueberries + Watermelon + Mango + Pineapple + Kiwi',
      translation: '蔓越莓 + 黑莓 + 蓝莓 + 西瓜 + 芒果 + 菠萝 + 奇异果',
      category: 'Dessert'
    }),
    Menu.create({
      section: 'Desserts',
      text: 'Coffee + Tea + Cookies',
      translation: '咖啡 + 茶 + 曲奇饼',
      category: 'Dessert'
    })
  ])

  console.log(`seeded ${menus.length} menus`)
  console.log(`seeded successfully`)

  const triviahimhers = await Promise.all([
    TriviaHimHer.create({
      text: 'Who steals apple pie at night?',
      translation: '天天向上',
      ans: 'her'
    }),
    TriviaHimHer.create({
      text: 'Who is the blanket thief?',
      translation: '天天向上',
      ans: 'him'
    }),
    TriviaHimHer.create({
      text: 'Who is a couch potato?',
      translation: '天天向上',
      ans: 'her'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question 1',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question 2',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question 3',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    }),
    TriviaHimHer.create({
      text: 'TriviaHimHer Dummy Question 4',
      translation: '天天向上',
      ans: 'her',
      type: 'dummy'
    })
  ])
  console.log(`seeded ${triviahimhers.length} triviahimhers`)
  console.log(`seeded successfully`)

  const triviatruefalses = await Promise.all([
    TriviaTrueFalse.create({
      text: 'John ordered Asian Stir Fry more often than April',
      translation: '天天向上',
      ans: 'true'
    }),
    TriviaTrueFalse.create({
      text:
        'April and John watched the final episode of Game of Throne Together',
      translation: '天天向上',
      ans: 'true'
    }),
    TriviaTrueFalse.create({
      text: 'April is the better chef',
      translation: '天天向上',
      ans: 'false'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question 1',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question 2',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question 3',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    }),
    TriviaTrueFalse.create({
      text: 'TriviaTrueFalse Dummy Question 4',
      translation: '天天向上',
      ans: 'true',
      type: 'dummy'
    })
  ])

  console.log(`seeded ${triviatruefalses.length} triviatruefalses`)
  console.log(`seeded successfully`)

  const triviaguessnumber = await Promise.all([
    TriviaGuessNumber.create({
      text: 'How many days between the first date and the wedding',
      translation: '天天向上',
      ans: 0
    }),
    TriviaGuessNumber.create({
      text: 'How many days between the first date and the proposal?',
      translation: '天天向上',
      ans: 0
    }),
    TriviaGuessNumber.create({
      text: 'How many days between the first date and the city hall wedding',
      translation: '天天向上',
      ans: 100
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question 1',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question 2',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question 3',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaGuessNumber.create({
      text: 'TriviaGuessNumber Dummy Question 4',
      translation: '天天向上',
      ans: 0,
      type: 'dummy'
    })
  ])

  console.log(`seeded ${triviaguessnumber.length} triviaguessnumber`)
  console.log(`seeded successfully`)

  const triviamultichoice = await Promise.all([
    TriviaMultiChoice.create({
      text: 'What was the criteria John used to pick first date restaurant?',
      translation: '首次约会john选择餐馆的标准是什么？',
      text1: 'He likes the restaurant to be quite so it allows conversation',
      translation1: '他问女生喜欢什么菜系',
      text2: 'He picks the restaurant near his aparment to save commute',
      translation2: '他选离家近的,省的麻烦',
      ans: 0
    }),
    TriviaMultiChoice.create({
      text: 'What did John and April eat at first date?',
      text1: 'Spanish tapa, sangria',
      text2: 'Japanese Bento, green tea crepe cake',
      text3: 'Sushi, sashimi and black sesame ice cream',
      translation: '首次约会John和April吃了什么？',
      translation1: '西班牙小食， 水果酒',
      translation2: '日式便当，绿茶千层蛋糕',
      translation3: '寿司，黑芝麻冰淇淋',
      ans: 0
    }),
    TriviaMultiChoice.create({
      text1: 'How many days between the first date and the city hall wedding',
      translation1: '天天向上',
      ans: 100
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question 1',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question 1 Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question 1 Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question 1 Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question 2',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question 2 Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question 2 Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question 2 Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question 3',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question 3 Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question 3 Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question 3 Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    }),
    TriviaMultiChoice.create({
      text: 'TriviaMultiChoice Dummy Question 4',
      translation: '天天向上',
      text1: 'TriviaMultiChoice Dummy Question 4 Option 1',
      translation1: '天天向上',
      text2: 'TriviaMultiChoice Dummy Question 4 Option 2',
      translation2: '天天向上',
      text3: 'TriviaMultiChoice Dummy Question 4 Option 3',
      translation3: '天天向上',
      ans: 0,
      type: 'dummy'
    })
  ])

  console.log(`seeded ${triviamultichoice.length} triviamultichoice`)
  console.log(`seeded successfully`)
}

async function seedAssociation() {
  var ranUser
  var ranTriviaHimHer
  var ranTriviaGuessNumber
  var ranTriviaTrueFalse
  var ranTriviaMultiChoice
  var ranMenu
  for (var k = 0; k < 100; k++) {
    ranUser = await User.findByPk(Math.floor(Math.random() * 3.9) + 1)
    ranTriviaHimHer = await TriviaHimHer.findByPk(
      Math.floor(Math.random() * 6.9) + 1
    )
    ranTriviaGuessNumber = await TriviaGuessNumber.findByPk(
      Math.floor(Math.random() * 6.9) + 1
    )
    ranTriviaTrueFalse = await TriviaTrueFalse.findByPk(
      Math.floor(Math.random() * 6.9) + 1
    )
    ranTriviaMultiChoice = await TriviaMultiChoice.findByPk(
      Math.floor(Math.random() * 6.9) + 1
    )
    ranMenu = await Menu.findOne({
      where: {section: 'Entree'}
    })
    await ranTriviaHimHer.addUser([ranUser])
    await ranTriviaGuessNumber.addUser([ranUser])
    await ranTriviaTrueFalse.addUser([ranUser])
    await ranTriviaMultiChoice.addUser([ranUser])
    await ranMenu.addUser([ranUser])
  }
  console.log(`seeded association successfully`)
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
    await seedAssociation()
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

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
