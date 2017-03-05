'use strict';

const yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab the
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'ziHYZyOerj_sZey6DW37lg';
const clientSecret ='Wj3kScwfNxVbYxdMIkhyjEyhtA1Bz60ai3rey2fLu2TlaEZhC96xHU9R7ZBYlgOV';

const searchRequest = {
  term:'Ramen burger',
  location: 'new york, NY'
};

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    const result = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(result, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
