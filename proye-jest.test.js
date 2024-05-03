test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true)
  expect(isEven(1)).toBe(false)
})