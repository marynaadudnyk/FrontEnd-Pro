function removeChars(text, textRemove) {
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

    return result;
}

console.log(removeChars(" hello world", ['l', 'd']));


