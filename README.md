[![Netlify Status](https://api.netlify.com/api/v1/badges/223a94b2-a8f5-42dc-9bbc-936d7ee2985f/deploy-status)](https://app.netlify.com/sites/silly-hypatia-fa017a/deploys)

# OpenFund

View the demo app here: https://silly-hypatia-fa017a.netlify.app/

## Development Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.


## Deployment

We rely on several platforms to do the heavy lifting for us.

1. Create a Postgres database on Heroku, and then go to the "credentials page".

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/moarsel/openfund)


2. Create a Stripe account, then go to the developer section to get API keys

(Stripe Dashboard)[http://dashboard.stripe.com/]

3. Create a Netlify account and add the required environment variables

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/moarsel/openfund"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

