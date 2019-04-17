function stringsToObject (actions) {
  return actions
    .trim()
    .split(/\s+/)
    .reduce((obj, action) => {
      obj[action] = action
      return obj
    }, {})
}

export default {
  API_URL: 'urlz',
  ACTIONS: stringsToObject(`
    REQUEST_ACTION_TEST
    RECEIVE_ACTION_TEST
  `)
}
