let message = '';

const messages = {
    array1: ["A", "casa", "é", "azul", "e", "muito", "grande", "com", "jardim", "elevado"],
    array2: ["O", "céu", "está", "azul", "e", "sem", "nuvens", "hoje", "à", "tarde"],
    array3: ["Meu", "amigo", "tem", "um", "cachorro", "muito", "fofo", "que", "adora", "brincar"]
}

function getMessage(){
    let randNum = Math.floor(Math.random() * 9);
    for(prop in messages){
        switch(prop) {
            case 'array1':
                message = `${messages[prop][randNum]} `;
                break
            case 'array2':
                message += `${messages[prop][randNum]} `;
                break
            case 'array3':
                message += `${messages[prop][randNum]}`;
                break
        }
    }
    return message
}

console.log(getMessage());