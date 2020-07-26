var calendar = new Calendar(calendarEl, {
  timeZone: 'UTC',
  events: [
    {
      id: 'a',
      title: 'my event',
      start: '2019-09-01'
    }
  ]
})

var event = calendar.getEventById('a')
var start = event.start 
console.log(start.toISOString())