//resolving file paths
const path = require('path');

module.exports = {
    entry: './client/client.js',
    mode: 'development', //developmnent or production mode
    watchOptions: {
        aggregateTimeout: 200, //prevent multiple rebuilds on save
    },
    output: {
        //bundled file will be in the 'hosted' folder, named 'bundle.js'
        path: path.resolve(__dirname, 'hosted'),
        filename: 'bundle.js'
    }
}