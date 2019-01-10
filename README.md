# **ccqp**

[![Build Status](https://travis-ci.org/monojack/ccqp.svg?branch=master)](https://travis-ci.org/monojack/ccqp)
[![npm version](https://img.shields.io/npm/v/ccqp.svg)](https://www.npmjs.com/package/ccqp)
[![npm downloads](https://img.shields.io/npm/dm/ccqp.svg)](https://www.npmjs.com/package/ccqp)
[![minified size](https://badgen.net/bundlephobia/min/ccqp)](https://bundlephobia.com/result?p=ccqp@latest)

[express](https://expressjs.com/) middleware to recursively transform query params keys to camel-case.

**TL;DR**

```sh
npm install ccqp
```

```js
const express = require('express')
const ccqp = require('ccqp')

const app = express()
app.use(ccqp)

// ...
```

&nbsp;

A request with the following querystring:

```js
const qs = `
  ?first_name=John
  &LastName=Doe
  &date-of_-birth=01.01.1985
  &hair.color=brown
  &contact[email]=john.doe@example.com
  &contact[phone_number]=754-3010
`
```

will have the following `req.query`:

```js
{
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '01.01.1985',
  hairColor: 'brown',
  contact: {
    email: 'john.doe@example.com',
    phoneNumber: '754-3010',
  },
 }
```

&nbsp;
