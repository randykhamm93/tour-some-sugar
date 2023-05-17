// Will contain bookings function that will return html representation with a list of bookings
// Need getBookings, getBands, and getVenues from database
import { getBookings } from "./database.js"
import { getBands } from "./database.js"
import { getVenues } from "./database.js"


// Store imported functions in a variable
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()


// Create and export Bookings function
export const Bookings = () => {
  // Create bookingsHTML variable with let and set = to "<ul>"
  let bookingsHTML = "<ul>"
  // Iterate bookings
  for (const booking of bookings) {
    // Create bandNames variable and set to empty array
    let bandNames = []
    // Iterate booking.bandIds
    for (const bandId of booking.bandId) {
      //Iterate bands
      for (const band of bands) {
        // If statement to check if band.id === bandId
        if (band.id === bandId) {
          // Push band name onto bandNames array
          bandNames.push(band.name)
        }
      }
    }
    // Create venueName variable and set it = to empty string
    let venueName = ""
    // Iterate venues
    for (const venue of venues) {
      // If statement to check if venue.id === booking.venueId
      if (venue.id === booking.venueId) {
        // Set venueName = to current venue.name
        venueName = venue.name
      }
    }
    // Create variable and assign it to bandNames
    const bandNamesString = bandNames.join(" and ")
    // Add html representation that is list of bookings
    // Add data attributes needed
    bookingsHTML += `<li data-id="${booking.id}"
                      data-type="booking"
                      >${bandNamesString} are playing at ${venueName} on ${booking.bookingDate}</li>`
  }
  // += operator to close out the ul tag- </ul>
  bookingsHTML += "</ul>"
  // Return html string variable
  return bookingsHTML
}



// Need event listener that produces a window alert that displays all of the bands information that is playing for that booking 
addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target
    // If statement to check if clicked item type === "booking"
    if (itemClicked.dataset.type === "booking") {
      // Create new variable (bookingId) and set it = to itemClicked.dataset.id
      let bookingId = parseInt(itemClicked.dataset.id)
      // Create new empty array called bookedBands
      let bookedBands = []
      // Iterate through bookings
      for (const booking of bookings) {
        // Check if booking.id === bookingId
        if (booking.id === bookingId) {
          // Iterate bands array
          for (const band of bands) {
            // If band.id is included in booking.bandId array
            if (booking.bandId.includes(band.id)) {
              // Push band onto bookedBands array
              bookedBands.push(band)
            }
          }
        }
      }
      // Create window alert
      window.alert(`Bands playing at this booking:\n\n${bookedBands.map(band => `${band.name} - ${band.genre} - ${band.numberOfMembers} members - formed in ${band.yearFormed}`).join('\n')}`)
    }
  }
)
