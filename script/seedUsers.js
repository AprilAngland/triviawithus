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
  // await db.sync({force: true})
  await db.sync()

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

  Menu.truncate({restartIdentity: true, cascade: true})
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
