function isObject (input) {
  return input !== null && typeof input === 'object'
}

function toCamelCase (str) {
  const corp = str.trim().replace(/[_.-]+(\w|$)/g, (_, x) => x.toUpperCase())
  return '' + corp[0].toLowerCase() + corp.slice(1)
}

function camelizeObjectKeys (obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key]
    acc[toCamelCase(key)] = isObject(value) ? camelizeObjectKeys(value) : value
    return acc
  }, {})
}

function ccqp (req, res, next) {
  req.query = camelizeObjectKeys(req.query)
  next()
}

module.exports = ccqp
