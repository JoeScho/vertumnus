const { seconds } = require('./constants')

module.exports = {
  seconds: {
    toMinutes: val => val / seconds.in.minute,
    toHour: val => val / seconds.in.hour,
    toDay: val => val / seconds.in.day,
    toWeek: val => val / seconds.in.week,
    toAstronomicalYear: val => val / seconds.in.astronomical_year,
    toCalendarYear: val => val / seconds.in.calendar_year,
    toLeapYear: val => val / seconds.in.leap_year,
  }
}
