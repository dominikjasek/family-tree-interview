import { func1 } from './func1';

describe("func1", () => {
  it("should return 123 when num is 0", () => {
    expect(func1(0)).toBe(123)
  })

  it("should return 456 when num is not 0", () => {
    expect(func1(1)).toBe(456)
  })
})
