# NordPass homework

Includes an automation(UI), API and bonus - non-functional testing challenges. 


## Getting Started

Clone the repository:

`` git clone https://github.com/eurostyle/nord-security-homework.git``

## Installation

Navigate to the project root directory and run the command:

``nmp i``

## Prerequisites

In order for all the tests to run successfully you will need a few things as listed bellow:

1. Get your Spotify API token from: ``https://developer.spotify.com/console/get-artist/``
2. Rename ".env_example" to: ``.env`` (dont assign any extensions)
3. Change placeholder values inside the ``.env`` file according to the example

## Running the tests

### Just click the play button, it's fun, I promise :D

1. ``npm run wdio`` runs all the tests
2. ``npm run login`` runs login.e2e.spec.ts
3. ``npm run artist`` runs artist.api.spec.ts
4. ``npm run xss`` runs xss.security.spec.ts


### License

MIT License
