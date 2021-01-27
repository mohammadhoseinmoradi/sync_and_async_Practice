const fs = require('fs');

function check(url) {
    fs.createWriteStream(url);
    fs.access(url, fs.F_OK, (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log("The file/from.txt exists!!");

    })
}
check('./files/from.txt')