// Formats todays date to be YYY-MM-DD
let today = new Date().toISOString().split('T', 1)[0];

//Add todayUnformatted variable below to compare and hide previous games. Comparison most accurate in Unix Time (marcus edit).
//note: When testing: new Date('2020', '00','02') corresponds to January, 2nd, 2020. Months start at 0.

let todayUnformatted = new Date();

//map singleGameTickets to new variable: currentAndFutureGames. Filter method will hide all games happening in the past and up until current game time (todayUnformatted). Converting game date into Unix Time within filter method (marcus edit).

let currentAndFutureGames = singleGameTickets.filter(function(game){
   return new Date(game.isoDate).getTime() >= todayUnformatted.getTime()
});

currentAndFutureGames.forEach((game)=>{
  // grabs information per event object
  const {team, date, isoDate, month, monthShort, location, presaleDescription, time, active, ticketURL, promoContent} = game;
  const {title, description} = promoContent;
  const logoURLpath =  logoURLpaths[team];
  const promoURLpath = promoURLpaths[title]

  // displays true or false depending on whether certain fields are empty and is the date is in the past
  const ticketsAvailable = (ticketURL !== '') ? true : false;
  const specialsAvailable = (description !== '') ? true : false;
  const presaleAvailable = (presaleDescription !== '') ? true : false;
  let pastGame = (isoDate < today) ? true : false;

  // this generates a search for the field's location via google
  const locationURL = () =>{
    let url = 'http://www.google.com/search?q='
    location.split(' ').forEach((word)=>{url += word + "+";})
    return url;
  }

  // generates show/hide functionality on whether event is available to purchase from, has promotions/specials, and whether game is in the past
  const ticketButtonShowClass= (ticketsAvailable) ? 'show' : 'hide';
  const presaleContentShowClass= (presaleAvailable) ? 'show' : 'hide';
  const specialsShowClass = (specialsAvailable) ? 'show' : 'hide';
  const hidePastGame = (pastGame) ? 'hide' : 'show';


  //this changes the color of the header by injecting a active/away background color
  const headerColorClass = (active) ? 'header-active' : 'header-away';

  //This hides the tickets button depending on the active/away status. It could be placed in other classes to show or hide depending on this status.
  const showClass = (active) ? 'show' : 'hide';


  // Creates a small triangle SVG to show a active or away game status in the upper left corner of the card
  // const locationText = (active) ? 'H' : 'A';
  // const flagColor = (active) ? '#7c2529' : '#666'

  // Corner SVG for active/inactive
  // const flagSVG= `
  //   <svg height="80" width="80">
  //     <polygon points="-10,-10 90,-10 -10,90" style="
  //       fill:white;
  //       fill-opacity:1;
  //       stroke:${flagColor};
  //       stroke-width:1" />
  //     <polygon points="-10,-10 75,-10 -10,75" style="
  //       fill:${flagColor};
  //       fill-opacity:.25;
  //       stroke:${flagColor};
  //       stroke-width:1" />
  //     <text class="location-flag-text" x="10" y="30" fill=${flagColor}>${locationText}</text>
  //   </svg>`

  $('#upcoming-games-schedule').append(`
    <div class="col-xs-12 splitter${monthShort} ${hidePastGame}">
      <h3>${month}</h3>
      <hr class="golden-rule">
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 ticket-card ${headerColorClass} ${title} ${hidePastGame} ">
      <div class="ticket-card-body front">
          <div class="header-wrapper">
            <h4 class="header-title"><span class='date'>${date.toUpperCase()}</span></h4>
          </div>
          <div class="hero-image-holder logo-image-holder">
            <img class="logo-image" src=${logoURLpath} aria-label="logo for ${team}">
          </div>

          <div class="content-holder">
            <div class="team-wrapper">
              <h2 class="team">${team}</h2>
              <p class="promoDescription">${title}</p>
            </div>
            <div class="info-wrapper">
              <a href=${locationURL()} target="blank" class="location"><i class="fas fa-map-marker-alt"></i> ${location}</a>
              <h4 class="time"><i class="far fa-clock"></i> ${time}</h4>
            </div>
            <div class="presale-content-wrapper ${presaleContentShowClass}">
              <a class="card-button show openPopup"><i class="fas fa-ticket-alt"></i> ${(`Presale: ${presaleDescription}`).toUpperCase()}</a>
            </div>
            <div class="buttons-panel">
              <a onClick="toggleSides(this)" class="card-button ${specialsShowClass}">${('Promo').toUpperCase()}</a>
              <a class="card-button ${ticketButtonShowClass} openPopup"><i class="fas fa-ticket-alt"></i> ${('Tickets').toUpperCase()}</a>
            </div>
          </div>
      </div>
      <div class="ticket-card-body back hide">
        <div class="header-wrapper ${headerColorClass}">
          <h4 class="header-title"><span class='date'>${title.toUpperCase()}</span></h4>
        </div>
        <div class="content-holder">
          <div class="eventPromo">
            <img src=${promoURLpath} aria-label="logo for ${title}">
            <p>${description}</p>
          </div>
          <div class="buttons-panel">
            <a class="card-button ${specialsShowClass}"><i class="fas fa-long-arrow-alt-left"></i> ${('Back').toUpperCase()}</a>
            <a class="card-button ${ticketButtonShowClass} openPopup"><i class="fas fa-ticket-alt"></i> ${('Tickets').toUpperCase()}</a>
          </div>
        </div>
      </div>
    </div>
  `);

  // if 'Family Day' title exists, append extra button to content-holder
  $('.Family.Day .back .content-holder').one().append(`
    <div class="buttons-panel family-pack">
      <a class="card-button ${ticketButtonShowClass}" href="https://www1.ticketmaster.com/event/1C00583DBAF7779D?did=4for49">4 for $49</a>
      <a class="card-button ${ticketButtonShowClass}" href="https://www1.ticketmaster.com/event/1C00583DBAF7779D?did=4for89">4 for $89</a>
    </div>
    <div class="tickets-panel family-pack">
      <a class="card-button ${specialsShowClass} openPopup"><i class="fas fa-long-arrow-alt-left"></i> ${('Back').toUpperCase()}</a>
    </div>
    </div>
  `);

});


function toggleSides(button) {
  $(button).parent().parent().parent().parent().children().toggleClass('hide');
}

// monthheading.js here

// familydaypromo.js here

// popup.js here
