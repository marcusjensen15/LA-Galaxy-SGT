# LA Galaxy Single Game Tickets (SGT) Build

Inspiration via the [Trailblazer's SGT page](https://www.nba.com/blazers/tickets/singletickets/1920) card design, LA Galaxy is getting a custom single game tickets page.

## Table of Contents
- [Setup Dev Environment](#introduction)
- [Folder Structure](#folder-structure)

## Introduction

After cloning the repo:

Run `npm i` to initiate all assets/elements needed

Run `npm run serve` to spin up your localhost environment.

Run `npm run scss` to watch and compile scss to css

> Note: The scss directory is being built out in the dist file. Have a .gitignore comment to not include this, but you may still see the scss directory in there while building locally and that's 100% okay! Make the appripriate changes to not include it during build if you want to clean up the dist directory for production entirely.

## Folder Structure

Below is an overview of each folder/file's purpose and recommended management style of new implementations:

```
/LA-Galaxy-Single-Game-Tickets/
|-- /backup/                            # Backup Build and Compiled folders (has latest copy of dist and src directories per last commit)
|
|-- /build/                             # Tools and Utilities
|   |-- gulpfile.js
|   |-- util.js
|
|-- /dist/                              # Compiled files (production ready)
|   |-- /css/
|       |-- style.css
|   |-- /img/SRFC_Teams/
|   |-- /scss/
|       |-- style.scss
|   |-- index.html
|   |-- script.js
|   |-- SRFC_schedule.js
|
|-- /src/                               # Source files
|   |-- /css/
|       |-- style.css                   # Compiled styles for production
|   |-- /img/opponents/
|   |-- /js/
|       |-- assets.js                   # CDN assets used in production
|       |-- familydaypromo.js           # SRFC specific promo - may not apply to LA Galaxy
|       |-- monthHeading.js             # Month Headings - needs some cleanup, repetitive code here!
|       |-- popup.js                    # Popup feature SRFC specific during COVID-19 - may not apply to LA Galaxy
|       |-- script.js                   # Main functionality of the page, where each card is getting formatted using .append()
|       |-- SRFCschedule.js             # JS Array of upcoming games - SRFC specific, working on creating one for LA Galaxy
|   |-- /scss/
|       |-- _adStyles.scss              # SRFC specific - may not apply to LA Galaxy
|       |-- _cardButtons.scss           # Button panel and buttons styles associated within the panels
|       |-- _cardDetails.scss           # Event details for both front and back of card
|       |-- _eventFlag.scss             # Top left corner flag that can be used for icon labeling
|       |-- _eventPromo.scss            # Promo styles for promotional details on back of cards
|       |-- _familyDay.scss             # SRFC promo specific - may not apply to LA Galaxy depending on their event promotions
|       |-- _global.scss                # Global associated styles - functional styles from JS
|       |-- _header.scss                # Card headings for home/away events - may not apply to LA Galaxy SGT page
|       |-- _localEnvironment.scss      # Local Environment specific styles - feel free to add to this!
|       |-- _logos.scss                 # Logo styles for all cards
|       |-- _monthHeading.scss          # Month Heading styles
|       |-- _ticketCard.scss            # Card styles for each event/game
|       |-- _variables.scss             # LA Galaxy Color Palette
|       |-- style.scss
|   |-- index.partial.html              # HTML used for the .append() in script.js
|   |-- index.template.html
|
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
```