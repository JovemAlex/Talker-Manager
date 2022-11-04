const fs = require('fs').promises;
const path = require('path');

const filePATH = path.resolve(__dirname, '..', 'talker.json');

const readFileContent = async () => {
  try {
    const fileContent = await fs.readFile(filePATH);
    const content = JSON.parse(fileContent);
    return content;
  } catch (error) {
    console.error(`Arquivo não pode ser lido ${error}`);
  }
};

module.exports = readFileContent;