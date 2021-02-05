const uid = require('uuid').v4

const dyca = db => {
  const store = {

    set: (path, value) => {
      if (value === undefined) {
        value = path
        path = uid()
      }
      db.set(path, value)
      return path
    },

    get: path => {
      const parts = path.split('/')
      const value = parts.slice(1).reduce((accum, part) => accum[part], db.get(parts[0]))
      return value
    },

    delete: key => db.delete(key),

    index: key => {},

  }
  return store
}

module.exports = dyca
