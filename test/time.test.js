const time = require('../src/time')

describe('time', () => {
  it('should convert seconds to minutes', () => {
    expect(time.functions.seconds.toMinutes(180)).toEqual(3)
  })
})
