// Will contain venues function that will return html representation with a list of venues
// Need getVenues from database
import { getBands, getBookings, getVenues } from "./database.js"

// Store getVenues and getBookings in a variable
const venues = getVenues()
const bookings = getBookings()
const bands = getBands()
// Create and export Venues function 
export const Venues = () => {
  // Create venuesHTML variable with let and set = to "<ul>"
  let venuesHTML = "<ul>"
  // Iterate venues
  for (const venue of venues) {
    // Add html representation that is list of venues
    // Add data attributes needed
    venuesHTML += `<li data-id="${venue.id}"
                  data-type="venue"
                  >${venue.name}</li>`
  }
  // += operator to close out the ul tag- </ul>
  venuesHTML += "</ul>"
  // Return html string variable
  return venuesHTML
}


// Need event listener that produces a window alert that displays all of the bands that have booked this venue
addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target
  // Check if itemClicked type === venue
  if (itemClicked.dataset.type === "venue") {
    const venueId = parseInt(itemClicked.dataset.id)
    const bandsPlaying = []
    // Iterate bookings
    for (const booking of bookings) {
      // Check if booking.venueId === venueId
      if (booking.venueId === venueId) {
        // Iterate booking.bandId
        for (const bandId of booking.bandId) {
          let band = null;
          // Iterate bands
          for (const b of bands) {
            // Check if .id and bandId match
            if (b.id === bandId) {
              // Reassign band to current b
              band = b
            }
          }
          let isBandAlreadyAdded = false
          // Iterate bandsPlaying array
          for (const addedBand of bandsPlaying) {
            // Check if band has already been added to array
            if (addedBand.id === bandId) {
              isBandAlreadyAdded = true
            }
          }
          // Check if is band and if band has not already been added
          if (band && !isBandAlreadyAdded) {
            // Push band onto bandsPlaying array
            bandsPlaying.push(band)
          }
        }
      }
    }
    let bandInfo = ""
    // Iterate bandsPlaying aray
    for (const band of bandsPlaying) {
      // Use += operator to get band info
      bandInfo += `${band.name}\n${band.genre}\nFormed in ${band.yearFormed}\n${band.numberOfMembers} band member`
      // Check if band.numberOfMembers does not = 1
      if (band.numberOfMembers !== 1) {
        // Add s if not
        bandInfo += "s"
      }
      // Add space
      bandInfo += "\n\n"
    }
    // Create window alert
    window.alert(`Bands that are playing at this venue:\n\n${bandInfo}`)
  }
})
