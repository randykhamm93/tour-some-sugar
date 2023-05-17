// Holds data the rest of the modules need to import
const database = {
    venues: [
      {
        id: 1,
        name: "The Cellar Moss",
        address: "123 Main St",
        squareFootage: 1000,
        maxOccupancy: 50
      },
      {
        id: 2,
        name: "The Rusty Mug",
        address: "456 Elm St",
        squareFootage: 800,
        maxOccupancy: 40
      },
      {
        id: 3,
        name: "The Groove Shack",
        address: "789 Oak St",
        squareFootage: 1200,
        maxOccupancy: 60
      },
      {
        id: 4,
        name: "The Velvet Lounge",
        address: "567 Pine St",
        squareFootage: 900,
        maxOccupancy: 45
      }
    ],
    bands: [
      {
        id: 1,
        name: "Rocket Pumpkins",
        numberOfMembers: 3,
        genre: "EDM",
        yearFormed: 2005
      },
      {
        id: 2,
        name: "Electric Tigers",
        numberOfMembers: 4,
        genre: "Rock",
        yearFormed: 2010
      },
      {
        id: 3,
        name: "Funky Monkeys",
        numberOfMembers: 5,
        genre: "Funk",
        yearFormed: 2008
      },
      {
        id: 4,
        name: "Jazz Cats",
        numberOfMembers: 4,
        genre: "Jazz",
        yearFormed: 2015
      },
      {
        id: 5,
        name: "Soul Sisters",
        numberOfMembers: 3,
        genre: "Soul",
        yearFormed: 2012
      },
      {
        id: 6,
        name: "Whiskey Myers",
        numberOfMembers: 4,
        genre: "Country",
        yearFormed: 2016
      }
    ],
    bookings: [
      {
        id: 1,
        bandId: [1, 3],
        venueId: 1,
        bookingDate: "12/13/2023"
      },
      {
        id: 2,
        bandId: [2, 6],
        venueId: 2,
        bookingDate: "12/14/2023"
      },
      {
        id: 3,
        bandId: [3, 5],
        venueId: 3,
        bookingDate: "12/15/2023"
      },
      {
        id: 4,
        bandId: [4, 1],
        venueId: 4,
        bookingDate: "12/16/2023"
      },
      {
        id: 5,
        bandId: [5, 2],
        venueId: 2,
        bookingDate: "12/17/2023"
      },
      {
        id: 6,
        bandId: [6],
        venueId: 3,
        bookingDate: "12/18/2023"
      },
      {
        id: 7,
        bandId: [3, 5],
        venueId: 1,
        bookingDate: "12/19/2023"
      },
      {
        id: 8,
        bandId: [2, 6],
        venueId: 4,
        bookingDate: "12/20/2023"
      },
      {
        id: 9,
        bandId: [5],
        venueId: 3,
        bookingDate: "12/21/2023"
      }
    ]
  }


export const getVenues = () => {
  return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
  return database.bookings.map(booking => ({...booking}))
}


export const getBands = () => {
  return database.bands.map(band => ({...band}))
}
