import { randomHandOptions } from "./randomHand"

describe('randomHand', () => {
  it('should return one of: rock, paper, scissors', () => {
    const validOptions = [ 'rock', 'paper', 'scissors' ]
    expect(validOptions).toContain(randomHandOptions())
  })
})