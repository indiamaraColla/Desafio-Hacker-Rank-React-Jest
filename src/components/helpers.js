export const checkDisabledButton = (list, value) => {
  if (list) {
    return list.some((item) => item.name === value)
  }

  return !value
}
