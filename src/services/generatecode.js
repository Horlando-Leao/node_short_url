
function generateURL() {

    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (let index = 0; index < 5; index++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}

module.exports = generateURL();