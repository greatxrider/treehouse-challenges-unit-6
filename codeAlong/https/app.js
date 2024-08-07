const https = require('https');

function getProfile() {
    https.get('https://teamtreehouse.com/profiles/greatxrider.json', (response) => {
        console.dir(response.statusCode);
    });
}

getProfile();
