import { Bookings } from './Bookings.js'
import { Venues } from './Venues.js'
import { Bands } from './Bands.js'
 console.log('Hello, Randy')

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="header">Tour Some Sugar On Me</h1>
<article class="current-bookings">
  <section class="bookings">
    <h2>Current Bookings</h2>
    ${Bookings()}</section>
</article>

<article class="details">
  <section class="detail--column list details_venues">
    <h2>Venues</h2>
    ${Venues()}
    </section>
  <section class="detail--column list details_bands">
    <h2>Bands</h2>
    ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
