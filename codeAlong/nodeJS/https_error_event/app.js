const https = require('https');

//Print the data
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/profiles/${username}.json`, (response) => {
            let body = '';
            // Read the data
            response.on('data', (data) => {
                body += data.toString();
            })
            response.on('end', () => {
                // Parse the data
                let profile = JSON.parse(body);
                printMessage(
                    username,
                    profile.badges.length,
                    profile.points.JavaScript
                );
            });
        });
        request.on('error', error =>
            console.error('The requested address was not found')
        );
    } catch (error) {
        console.error(error.message);
    }
}

// getProfile('greatxrider');
const users = process.argv.slice(2);
users.forEach((user) => getProfile(user));
