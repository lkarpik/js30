const insert = [];
const secret = "hello";

const secretArray = secret.split("");

window.addEventListener("keyup", e => {

    insert.push(e.key);
    if (insert.length > secretArray.length) {
        insert.splice(-secretArray.length - 1, insert.length - secretArray.length);
    }

    console.log(insert);
    if (insert.join("") === secret) {
        console.log("YES!");
        cornify_add();
    }
});