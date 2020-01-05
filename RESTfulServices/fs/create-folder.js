const fs = require("fs");

const folderName = '/Users/RLHul/Desktop/React Training Materials/03 REST API _ NodeJS/labs/RESTfulServices/testfoldercreated'

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
} catch (err) {
    console.error(err);
}