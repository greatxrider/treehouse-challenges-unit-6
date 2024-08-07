const https = require('https');

function getProfile() {
    https.get('https://teamtreehouse.com/profiles/greatxrider.json', (response) => {
        let body = '';
        console.dir(response.statusCode);
        response.on('data', (data) => {
            body += data.toString();
        })
        response.on('end', () => {
            console.dir(JSON.parse(body));
        })
    });
}

getProfile();
