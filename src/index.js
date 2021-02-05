const uid = require('uuid').v4
const _ = {
  set: require('lodash.set')
}

const dyca = db => {

  const collections = {}

  const add = (path, value) => {
    if (value === undefined) {
      value = path
      path = ''
    }

    // set db
    const id = uid()
    db.set(id, value)

    // set collection
    _.set(collections, `${path.replace(/\//g, '.')}.${id}`, true)

    return id
  }

  const get = (collection, parts) => {

    // return value for direct hit
    const direct = db.get(parts[0])
    if (direct) return direct

    // otherwise dive into nested collection
    const value = collection[parts[0]]
    return parts.length > 1
      ? get(value, parts.slice(1))
      : Object.keys(value)
        .map(key => db.get(key))
  }

  return {
    add,
    get: path => get(collections, path.split('/')),
    delete: key => db.delete(key),
    index: key => {},
  }
}

module.exports = dyca
