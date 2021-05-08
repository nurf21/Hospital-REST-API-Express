const connection = require('../config/mysql')

module.exports = {
  postPatient: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO patient SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  countPatient: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT COUNT(*) as total FROM patient', (error, result) => {
        !error ? resolve(result[0].total) : reject(new Error(error))
      })
    })
  },
  getAllPatient: (limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM patient LIMIT ? OFFSET ?`, [limit, offset], (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}