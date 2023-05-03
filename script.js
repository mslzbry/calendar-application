// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.saveBtn').on('click', function () {
    //links to .saveBtn in html based on sibling and then parent
    console.log($(this).siblings)
    var text = $(this).siblings('.description').val()
    console.log(text)
    var timeBlock = $(this).parent().attr('id')
    console.log(timeBlock)
    localStorage.setItem(timeBlock, text) //saves user text and specific time block locally
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var hour = dayjs().hour()
  $('.time-block').each(function () {
    var timeSlot = $(this).attr('id')
    if (hour > timeSlot) {
      //if current time is greater than timeSlot (individual time blocks) = past
      $(this).addClass('past')
    } else if (hour == timeSlot) {
      //if current time is same as timeSlot = present
      $(this).addClass('present')
    } else {
      //if current time is less than timeSlot = future
      $(this).addClass('future')
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    //below is getting text from local storage for each time block
    $(this).children('.description').val(localStorage.getItem(timeSlot))
  })

  // TODO: Add code to display the current date in the header of the page.
  var timeDisplay = document.querySelector('#currentDay')
  var timeCurrent = dayjs().format('dddd, MMMM D, YYYY, h:mm a') //displays date and time at top of page
  timeDisplay.textContent = timeCurrent
})
