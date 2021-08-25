const translate = require("./script");

const promptly = require('promptly');
 
(async () => {
    const word = await promptly.prompt('Word: ');
    console.log(translate(word));
})();