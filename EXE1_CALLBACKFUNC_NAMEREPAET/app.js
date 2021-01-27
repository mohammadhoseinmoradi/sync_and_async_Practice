const NAME = "Ali";
const LAST_NAME = "Ahmadi";


function replayFullName(firstname, lastname, showResult) {
    let result = firstname + " " + lastname;
    showResult(result);
}
replayFullName(NAME, LAST_NAME, function(result) {
    console.log("result ===> ", result)
})