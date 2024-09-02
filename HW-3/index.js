let string = "hello world";

function reduceChar(str) {
    let repet = {};
    let sentence = "";
    let chars = [];
    str.split(" ").forEach((item) => {
        sentence += item;
    });
    for (let i = 0; i < sentence.length; i++) {
        chars.push(sentence[i]);
    }

    chars.forEach((item) => {
        let k = 0;
        chars.reduce((pre, cur) => {
            if (cur === item) {
                k++;
            }
        }, item);
        repet[`${item}`] = k;
    });

    return repet;
}

reduceChar(string);