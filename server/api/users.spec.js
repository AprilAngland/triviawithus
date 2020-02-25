/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
// const agent = require('superagent');
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    // it('GET /api/users', async () => {
    //   const res = await request(app)
    //     .post('/login').send({ user: {id:0, email:"a@b.com", type:"admin"}})
    //   console.log(res.body)
    //   // .get('/api/users')
    //   // .send()
    //   // .expect(200)
    // // expect(req.user.id).to.be.an(0)
    // expect(res.body).to.be.an('array')
    // expect(res.body[0].email).to.be.equal(codysEmail)
    // })
  }) // end describe('/api/users')
}) // end describe('User routes')
