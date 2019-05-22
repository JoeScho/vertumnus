const { seconds, minutes, hours, days, weeks, astronomicalYears, calendarYears, leapYears } = require('../src/time')

describe('time', () => {

  describe('seconds', () => {
    it('should convert seconds to minutes', () => {
      expect(seconds.toMinutes(180)).toEqual(3)
    })

    it('should convert seconds to hours', () => {
      expect(seconds.toHours(10800)).toEqual(3)
    })

    it('should convert seconds to days', () => {
      expect(seconds.toDays(259200)).toEqual(3)
    })

    it('should convert seconds to weeks', () => {
      expect(seconds.toWeeks(1814400)).toEqual(3)
    })

    it('should convert seconds to astronomical years', () => {
      expect(seconds.toAstronomicalYears(94672800)).toEqual(3)
    })

    it('should convert seconds to calendar years', () => {
      expect(seconds.toCalendarYears(94608000)).toEqual(3)
    })

    it('should convert seconds to leap years', () => {
      expect(seconds.toLeapYears(94867200)).toEqual(3)
    })
  })

  describe('minutes', () => {
    it('should convert minutes to seconds', () => {
      expect(minutes.toSeconds(3)).toEqual(180)
    })

    it('should convert minutes to hours', () => {
      expect(minutes.toHours(180)).toEqual(3)
    })

    it('should convert minutes to days', () => {
      expect(minutes.toDays(4320)).toEqual(3)
    })

    it('should convert minutes to weeks', () => {
      expect(minutes.toWeeks(30240)).toEqual(3)
    })

    it('should convert minutes to astronomical years', () => {
      expect(minutes.toAstronomicalYears(1577880)).toEqual(3)
    })

    it('should convert minutes to calendar years', () => {
      expect(minutes.toCalendarYears(1576800)).toEqual(3)
    })

    it('should convert minutes to leap years', () => {
      expect(minutes.toLeapYears(1581120)).toEqual(3)
    })
  })

  describe('hours', () => {
    it('should convert hours to seconds', () => {
      expect(hours.toSeconds(3)).toEqual(10800)
    })

    it('should convert hours to minutes', () => {
      expect(hours.toMinutes(3)).toEqual(180)
    })

    it('should convert hours to days', () => {
      expect(hours.toDays(72)).toEqual(3)
    })

    it('should convert hours to weeks', () => {
      expect(hours.toWeeks(504)).toEqual(3)
    })

    it('should convert hours to astronomical years', () => {
      expect(hours.toAstronomicalYears(26298)).toEqual(3)
    })

    it('should convert hours to calendar years', () => {
      expect(hours.toCalendarYears(26280)).toEqual(3)
    })

    it('should convert hours to leap years', () => {
      expect(hours.toLeapYears(26352)).toEqual(3)
    })
  })

  describe('weeks', () => {
    it('should convert weeks to seconds', () => {
      expect(weeks.toSeconds(3)).toEqual(1814400)
    })

    it('should convert weeks to minutes', () => {
      expect(weeks.toMinutes(3)).toEqual(30240)
    })

    it('should convert weeks to hours', () => {
      expect(weeks.toHours(3)).toEqual(504)
    })

    it('should convert weeks to days', () => {
      expect(weeks.toDays(3)).toEqual(21)
    })

    it('should convert weeks to astronomical years', () => {
      expect(weeks.toAstronomicalYears(156.53571428571428)).toEqual(3)
    })

    it('should convert weeks to calendar years', () => {
      expect(weeks.toCalendarYears(156.42857142857142)).toEqual(3)
    })

    it('should convert weeks to leap years', () => {
      expect(weeks.toLeapYears(156.85714285714286)).toEqual(3)
    })
  })

  describe('astronomicalYears', () => {
    it('should convert astronomicalYears to seconds', () => {
      expect(astronomicalYears.toSeconds(3)).toEqual(94672800)
    })

    it('should convert astronomicalYears to minutes', () => {
      expect(astronomicalYears.toMinutes(3)).toEqual(1577880)
    })

    it('should convert astronomicalYears to hours', () => {
      expect(astronomicalYears.toHours(3)).toEqual(26298)
    })

    it('should convert astronomicalYears to days', () => {
      expect(astronomicalYears.toDays(3)).toEqual(1095.75)
    })

    it('should convert astronomicalYears to weeks', () => {
      expect(astronomicalYears.toWeeks(3)).toEqual(156.53571428571428)
    })

    it('should convert astronomicalYears to calendar years', () => {
      expect(astronomicalYears.toCalendarYears(1)).toEqual(1.0006849315068493)
    })

    it('should convert astronomicalYears to leap years', () => {
      expect(astronomicalYears.toLeapYears(1)).toEqual(0.9979508196721312)
    })
  })
})
