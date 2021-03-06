const secondsIn = require('./constants')

module.exports = {
  seconds: {
    toMinutes: val => val / secondsIn.minute,
    toHours: val => val / secondsIn.hour,
    toDays: val => val / secondsIn.day,
    toWeeks: val => val / secondsIn.week,
    toAstronomicalYears: val => val / secondsIn.astronomical_year,
    toCalendarYears: val => val / secondsIn.calendar_year,
    toLeapYears: val => val / secondsIn.leap_year,
  },
  minutes: {
    toSeconds: val => val * secondsIn.minute,
    toHours: val => (val * secondsIn.minute) / secondsIn.hour,
    toDays: val => (val * secondsIn.minute) / secondsIn.day,
    toWeeks: val => (val * secondsIn.minute) / secondsIn.week,
    toAstronomicalYears: val => (val * secondsIn.minute) / secondsIn.astronomical_year,
    toCalendarYears: val => (val * secondsIn.minute) / secondsIn.calendar_year,
    toLeapYears: val => (val * secondsIn.minute) / secondsIn.leap_year,
  },
  hours: {
    toSeconds: val => val * secondsIn.hour,
    toMinutes: val => (val * secondsIn.hour) / secondsIn.minute,
    toDays: val => (val * secondsIn.hour) / secondsIn.day,
    toWeeks: val => (val * secondsIn.hour) / secondsIn.week,
    toAstronomicalYears: val => (val * secondsIn.hour) / secondsIn.astronomical_year,
    toCalendarYears: val => (val * secondsIn.hour) / secondsIn.calendar_year,
    toLeapYears: val => (val * secondsIn.hour) / secondsIn.leap_year,
  },
  days: {
    toSeconds: val => val * secondsIn.day,
    toMinutes: val => (val * secondsIn.day) / secondsIn.minute,
    toHours: val => (val * secondsIn.day) / secondsIn.hour,
    toWeeks: val => (val * secondsIn.day) / secondsIn.week,
    toAstronomicalYears: val => (val * secondsIn.day) / secondsIn.astronomical_year,
    toCalendarYears: val => (val * secondsIn.day) / secondsIn.calendar_year,
    toLeapYears: val => (val * secondsIn.day) / secondsIn.leap_year,
  },
  weeks: {
    toSeconds: val => val * secondsIn.week,
    toMinutes: val => (val * secondsIn.week) / secondsIn.minute,
    toHours: val => (val * secondsIn.week) / secondsIn.hour,
    toDays: val => (val * secondsIn.week) / secondsIn.day,
    toAstronomicalYears: val => (val * secondsIn.week) / secondsIn.astronomical_year,
    toCalendarYears: val => (val * secondsIn.week) / secondsIn.calendar_year,
    toLeapYears: val => (val * secondsIn.week) / secondsIn.leap_year,
  },
  astronomicalYears: {
    toSeconds: val => val * secondsIn.astronomical_year,
    toMinutes: val => (val * secondsIn.astronomical_year) / secondsIn.minute,
    toHours: val => (val * secondsIn.astronomical_year) / secondsIn.hour,
    toDays: val => (val * secondsIn.astronomical_year) / secondsIn.day,
    toWeeks: val => (val * secondsIn.astronomical_year) / secondsIn.week,
    toCalendarYears: val => (val * secondsIn.astronomical_year) / secondsIn.calendar_year,
    toLeapYears: val => (val * secondsIn.astronomical_year) / secondsIn.leap_year,
  },
  calendarYears: {
    toSeconds: val => val * secondsIn.calendar_year,
    toMinutes: val => (val * secondsIn.calendar_year) * secondsIn.minute,
    toHours: val => (val * secondsIn.calendar_year) / secondsIn.calendar_year,
    toDays: val => (val * secondsIn.calendar_year) / secondsIn.day,
    toWeeks: val => (val * secondsIn.calendar_year) / secondsIn.week,
    toAstronomicalYears: val => (val * secondsIn.calendar_year) / secondsIn.astronomical_year,
    toLeapYears: val => (val * secondsIn.calendar_year) / secondsIn.leap_year,
  },
  leapYears: {
    toSeconds: val => val * secondsIn.leap_year,
    toMinutes: val => (val * secondsIn.leap_year) * secondsIn.minute,
    toHours: val => (val * secondsIn.leap_year) / secondsIn.hour,
    toDays: val => (val * secondsIn.leap_year) / secondsIn.day,
    toWeeks: val => (val * secondsIn.leap_year) / secondsIn.week,
    toAstronomicalYears: val => (val * secondsIn.leap_year) / secondsIn.astronomical_year,
    toCalendarYears: val => (val * secondsIn.leap_year) / secondsIn.calendar_year,
  },
}
