const fs = require('fs').promises;
const path = require('path');

const filePATH = path.resolve(__dirname, '..', 'talker.json');

const writeFileContent = async (data) => {
  try {
    await fs.writeFile(filePATH, JSON.stringify(data));
  } catch (error) {
    console.error(`Arquivo não pode ser escrito ${error}`);
  }
};

module.exports = writeFileContent;