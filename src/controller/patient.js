const helper = require('../helper')
const qs = require('querystring')
const { postPatient, countPatient, getAllPatient, getPatientById, patchPatient, deletePatient } = require('../model/patient')

const getPrevLink = (page, currentQuery) => {
  if (page > 1) {
    const generatePage = {
      page: page - 1
    }
    const resultPrevLink = { ...currentQuery, ...generatePage }
    return qs.stringify(resultPrevLink)
  } else {
    return null
  }
}

const getNextLink = (page, totalPage, currentQuery) => {
  if (page < totalPage) {
    const generatePage = {
      page: page + 1
    }
    const resultPrevLink = { ...currentQuery, ...generatePage }
    return qs.stringify(resultPrevLink)
  } else {
    return null
  }
}

module.exports = {
  postPatient: async (request, response) => {
    try {
      const setData = {
        name: request.body.name,
        sex: request.body.sex,
        religion: request.body.religion,
        phone: request.body.phone,
        address: request.body.address,
        nik: request.body.nik
      }
      Object.keys(setData).map((key, index) => {
        if (setData[key] === '') {
          return helper.response(response, 400, 'Please fill in all the required fields')
        }
      })
      const result = await postPatient(setData)
      return helper.response(response, 200, 'Patient data successfully added to database', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getAllPatient: async (request, response) => {
    let { page, limit } = request.query
    page === undefined || page === '' ? (page = 1) : (page = parseInt(page))
    limit === undefined || limit === '' ? (limit = 10) : (limit = parseInt(limit))
    const totalData = await countPatient()
    const totalPage = Math.ceil(totalData / limit)
    const offset = page * limit - limit
    const prevLink = getPrevLink(page, request.query)
    const nextLink = getNextLink(page, totalPage, request.query)
    const pageInfo = {
      page,
      totalPage,
      limit,
      totalData,
      prevLink: prevLink && `http://127.0.0.1:3001/patient?${prevLink}`,
      nextLink: nextLink && `http://127.0.0.1:3001/patient?${nextLink}`
    }
    try {
      const result = await getAllPatient(limit, offset)
      if (result.length > 0) {
        return helper.response(response, 200, "Get all patient's data success", result, pageInfo)
      } else {
        return helper.response(response, 200, "Get all patient's data success", [], pageInfo)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getPatientById: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getPatientById(id)
      if (result.length > 0) {
        return helper.response(response, 200, `Get patient's data with id : ${id} success`, result)
      } else {
        return helper.response(response, 400, `Patient's data with id : ${id} not found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  patchPatient: async (request, response) => {
    try {
      const { id } = request.params
      const setData = {
        name: request.body.name,
        sex: request.body.sex,
        religion: request.body.religion,
        phone: request.body.phone,
        address: request.body.address,
        nik: request.body.nik
      }
      Object.keys(setData).map((key, index) => {
        if (setData[key] === '') {
          return helper.response(response, 400, 'Please fill in all the required fields')
        }
      })
      const checkId = await getPatientById(id)
      if (checkId.length > 0) {
        const result = await patchPatient(setData, id)
        return helper.response(response, 200, "Patient's data updated", result)
      } else {
        return helper.response(response, 400, `Patient's data with id : ${id} not found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deletePatient: async (request, response) => {
    try {
      const { id } = request.params
      const checkId = await getPatientById(id)
      if (checkId.length > 0) {
        await deletePatient(id)
        return helper.response(response, 200, `Patient's data with id : ${id} has been successfully deleted`)
      } else {
        return helper.response(response, 400, `Patient's data with id : ${id} not found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}