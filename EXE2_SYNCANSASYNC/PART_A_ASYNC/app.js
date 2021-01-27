const fs = require('fs');

function add(url1, url2, Data) {
    fs.writeFile(url1, Data, function(err) {
        if (err) console.log(err.message);
        fs.readFile(url1, "utf8", function(err, data) {
            if (err) console.log(err.message);
            fs.writeFile(url2, Data, function(err) {
                if (err) console.log(err.message);
                console.log("the File Has Been Seved Data!!")
            })
        });
    })
}
add('./fils/from.txt', './fils/to.txt', "from");