const jwt = require('jsonwebtoken');
const generateAuthToken = ( user ) => {
    return jwt.sign( user, process.env.JWT_SECRET, { expiresIn: '48h' } );
}

module.exports = generateAuthToken;