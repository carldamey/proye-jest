function isEven(num) {
  return num % 2 === 0
}

console.log(isEven(2))
console.log(isEven(1))

test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true)
})