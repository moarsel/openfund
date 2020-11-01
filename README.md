[![Netlify Status](https://api.netlify.com/api/v1/badges/223a94b2-a8f5-42dc-9bbc-936d7ee2985f/deploy-status)](https://app.netlify.com/sites/silly-hypatia-fa017a/deploys)

# OpenFund
OpenFund is an open source fundraising platform that implements quadratic funding. It's built on Redwood.js using a Jamstack architecture.

**View the demo app here: https://silly-hypatia-fa017a.netlify.app/**


## Why

"In the traditional nonprofit funding model, individual contributions are made without a specific purpose and the expenditure of funds is subject to decisions made by the central recipient."

"In turn, Quadratic Funding (QF) is a more democratic and scalable method to fund public goods like the work of a nonprofit organization."

"We hope that a RxC Quadratic Funding program helps [RadicalxChange Foundation](https://radicalxchange.org/) to attract more contributions from the RxC community and at the same time, allocates our budget to projects that reflect the community needs."


## Development Setup

This repository is built with:

* Redwood.js for the fullstack framework
* React and Tachyons for the UI
* Stripe for payment processing
* Netlify for managing auth and hosting
* Postgres for DB hosting

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.


## Deploy your own copy

We rely on several platforms to do the heavy lifting for us.

1. Create a Postgres database on Heroku by clicking the button below, and then get your database url on the "credentials page".

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/moarsel/openfund)


2. Create a Stripe account, then go to the developer section to get your API keys

[Stripe Dashboard](http://dashboard.stripe.com/)

3. Create a Netlify account, click the button below, and add the required environment variables collected above

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/moarsel/openfund"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

