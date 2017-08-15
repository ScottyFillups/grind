function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    return submittedUsers.every(s => goodUsers.some(g => g.id === s.id))
  }
}

module.exports = checkUsersValid
