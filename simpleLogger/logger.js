const path = require('path');
const fs = require('fs');

//определяем путь к фаайлу лога
const filePath = path.join(__dirname, "log.txt");

function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logMessage  = `[${timestamp}] ${message}\n`;

fs.appendFile(filePath, logMessage, (err) => {

if(err) {
console.error('Log error: ', err);
} else {
    console.log('Log wrote: ', message);
}
})
} 

module.exports = {logMessage};
