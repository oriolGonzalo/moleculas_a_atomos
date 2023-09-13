function isALetter(char) {
    return char.length === 1 && char.match(/[A-Z]/i);
}

function isAnUpperCaseLetter(char) {
    return char.length === 1 && char.match(/[A-Z]/);
}

function isALowerCaseLetter(char) {
    return char.length === 1 && char.match(/[a-z]/);
}

function isInteger(char) {
    return !isNaN(char - parseInt(char));
}

function findBasicCase()

export function parseMolecule(formula: string) {
    const resultObj = {}
    const molecula = formula.slice();

    for (let i = 0; i < molecula.length; i++)
    {
        const char = molecula[i]
        if (molecula.lastIndexOf("(")){
            
        }
        if (molecula.indexOf("[")) {

        }
        if (isALetter(molecula[i])) {
            let atom = char
            resultObj[atom] = resultObj[atom] ? resultObj[atom] + 1 : 1;
        }
        if(isInteger(molecula[i])){
            const _atom = molecula[i - 1]
            console.log({_atom})
            resultObj[_atom] = resultObj[_atom] ? resultObj[_atom] + 1 : 1;
        }
    }
    return resultObj; 
}