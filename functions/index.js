var functions = require('firebase-functions');
var admin = require('firebase-admin');
var axios = require('axios');

admin.initializeApp();

exports.onUserCreated = functions.auth.user().onCreate(function (user) {
    var url = 'https://suzi-backend-kunqmukjgq-uw.a.run.app/';
    var data = {
        email: user.email,
        firebaseID: user.uid,
        state: 'india',
    };

    return axios.post(url, data)
        .then(function (response) {
            functions.logger.info('Post request sent', { structuredData: true });
        })
        .catch(function (error) {
            functions.logger.error('Error sending post request', { structuredData: true });
        });
});