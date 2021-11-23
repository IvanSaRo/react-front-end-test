export const checkPersistency = (dateField, data) => {
  const date = new Date()
  const millennium = new Date(2000, 0, 1)
  const hourInMiliseconds = 3_600_000

  const dateStored = new Date(JSON.parse(sessionStorage.getItem(dateField)))

  // console.log(sessionStorage.getItem(data))
  if (!dateStored) { return false }
  if (!sessionStorage.getItem(data)) { return false }
  const dateStoredHours = Math.ceil((dateStored.getTime() - millennium.getTime())) / hourInMiliseconds
  const dateNowHours = Math.ceil((date.getTime() - millennium.getTime())) / hourInMiliseconds
  return ((dateNowHours - dateStoredHours) <= 1)
}
