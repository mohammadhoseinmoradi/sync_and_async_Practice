const fs = require('fs');


function nameObj(uid, name, verb, number) {
    this.uid = uid;
    this.name = name;
    this.verb = verb;
    this.number = `${number}`;
}

function numberObj(uid, number) {
    this.uid = uid;
    this.number = number;

}


function read_file(url, text) {

    let array = [];
    let data = fs.readFileSync(url, "utf8");
    array = data.split(/\r?\n/);

    let objArray = [];
    for (let i = 0; i < array.length; i++) {
        let creatObj;
        creatObj = array[i].split("-");
        if (text === "name") {

            objArray.push(new nameObj(creatObj[0], creatObj[1]));
        } else {
            objArray.push(new numberObj(creatObj[0], creatObj[1]));

        }


    }

    return objArray;
}

function merge(nameArray, numbersArray) {
    let result = [];
    for (let i = 0; i < nameArray.length; i++) {
        let count = 0;
        for (let j = 0; j < numbersArray.length; j++) {
            if (nameArray[i].uid == numbersArray[j].uid) {
                count++;
                if (count === 2) {
                    nameArray[i].verb = "’s phone numbers are "
                    nameArray[i].number += ", " + numbersArray[j].number;
                } else {
                    nameArray[i].verb = "’s phone number is "
                    nameArray[i].number = numbersArray[j].number;
                }
            }
            if (nameArray[i].verb == undefined) {
                nameArray[i].verb = " hasn’t any phone number."
                nameArray[i].number = "";
            }
        }
        result.push(nameArray[i]);
    }
    return result;
}

function main(namesUrl, numbersUrl) {

    let nameArray = read_file(namesUrl, "name");
    let numbersArray = read_file(numbersUrl, "num");


    merge(nameArray, numbersArray);

    for (const key in nameArray) {
        console.log(`${nameArray[key].name}${nameArray[key].verb}${nameArray[key].number}`);
    }

}
main("./file/names.txt", "./file/numbers.txt");