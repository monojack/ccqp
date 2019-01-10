const app = require('express')()
const request = require('supertest')
const test = require('ava')
const { flat, nested, } = require('./mocks')
const ccqp = require('..')

app.use(ccqp)
app.get('*', (req, res) => {
  res.json(req.query)
})

test(`ignores missing querystring`, async t => {
  t.plan(1)
  const res = await request(app).get(`/`)
  t.deepEqual(res.body, {})
})

test('correctly transforms flat query params', async t => {
  t.plan(1)
  const res = await request(app).get(`/${flat.qs}`)
  t.deepEqual(res.body, flat.expected)
})

test('correctly transforms nested query params', async t => {
  t.plan(1)
  const res = await request(app).get(`/${nested.qs}`)
  t.deepEqual(res.body, nested.expected)
})
