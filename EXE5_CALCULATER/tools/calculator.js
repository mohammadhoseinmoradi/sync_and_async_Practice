// import modules

function convert(Operand, operatorA, operatorB) {
    if (Operand === "Total") {
        return operatorA + operatorB;
    } else if (Operand === "Submission") {
        return operatorA - operatorB;
    } else if (Operand === "Multiplication") {
        return operatorA * operatorB;
    } else if (Operand === "Division") {
        return operatorA / operatorB;
    }
}


module.exports = convert;