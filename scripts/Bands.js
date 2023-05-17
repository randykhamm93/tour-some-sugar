// Will contain bands function that will return html representation with a list of bands
// Need getBands and getBookings from database
import { getBands, getBookings, getVenues } from './database.js'


// Store getBands in a variable
const bands = getBands()
// Create and export Bands function
export const Bands = () => {
  // Create bandsHTML variable with let and set = to "<ul>"
  let bandsHTML = "<ul>"
  // Iterate bands
  for (const band of bands) {
    // Add html representation that is list of bands
    // Add data attributes needed
    bandsHTML += `<li data-id="${band.id}"
                 data-type="band"
                 >${band.name}</li>`
  }
  // += operator to close out the ul tag- </ul>
  bandsHTML += "</ul>"
  // Return html string variable
  return bandsHTML
}



// Need event listener that produces a window alert that displays all of the venues at which the band is playing
addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target
    // If statement to check if clicked item type === "band"
    if (itemClicked.dataset.type === "band") {
      // Create bandId variable and set = to itemClicked.dataset.id and translate to number with parseInt
      const bandId = parseInt(itemClicked.dataset.id)
      // Create bandId variable and set = to getBookings()
      const bookings = getBookings()
      // Create venues variable and set = to getVenues()
      const venues = getVenues()
      // Create venuesPlaying array and set = to empty array
      const venuesPlaying = []
      // Create bandName variable and set = to empty string
      let bandName = ""
      // Iterate bands
      for (const band of bands) {
        // Check if band.id === bandId
        if (band.id === bandId) {
          // Reassign value of bandName to current band name
          bandName = band.name
        }
      }
      // Iterate bookings
      for (const booking of bookings) {
        // Check if booking.bandId inclueds a property named bandId
        if (booking.bandId.includes(bandId)) {
          // Iterate venues
          for (const venue of venues) {
            // Check if venue.id === booking.venueId AND if venuesPlaying already contains the venue.name
            if (venue.id === booking.venueId && !venuesPlaying.includes(venue.name)) {
              // Push current venue name onto venuesPlaying array
              venuesPlaying.push(venue.name)
            }
          }
        }
      }
      // Check if venuesPlaying.length is > 0
      if (venuesPlaying.length > 0) {
        // Create window alert
        window.alert(`${bandName} are playing at ${venuesPlaying.join(", ")}`)
      }
    }
  })
