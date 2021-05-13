export const getArr = (count: number) => {
  return Array.from({ length: count }, (item: number, idx: number) => idx + 1)
}
