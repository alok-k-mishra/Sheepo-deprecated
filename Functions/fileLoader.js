const { glob } = require("glob");
const { promisify } = require("util");
const proGlob = promisify(glob);

async function loadFiles(commands){
    const Files = await proGlob(`${process.cwd().replace(/\\/g, "/")}/${commands}/**/*.js`);
    Files.forEach(file0 => delete require.cach[require.resolve(file)]);
    return Files;
}


module.exports = { loadFiles }