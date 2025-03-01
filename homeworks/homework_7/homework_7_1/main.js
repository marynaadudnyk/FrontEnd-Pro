let text = "hello world";
let textRemove = ['l', 'd'];

function removeLetters(text, textRemove) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let remove = false;

        for (let j = 0; j < textRemove.length; j++) {
            if (text[i] === textRemove[j]){
                remove = true;
                break;
            }
        }

        if (remove === false) {
            result = result + text[i];
        }
    }

    console.log(result);
}

removeLetters(text, textRemove)

