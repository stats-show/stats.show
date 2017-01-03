const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const comparisonsFolderPath = process.argv[2];
buildComparisons(comparisonsFolderPath, 'comparisons.json');

function buildComparisons(comparisonsFolderPath, resultFileName) {
  const results = [];
  try {
    console.log(`Removing ${resultFileName} file.`);
    const dirPath = path.resolve(comparisonsFolderPath);
    const resultFilePath = path.resolve(dirPath, resultFileName);
    if (fs.existsSync(resultFilePath)) {
        fs.unlinkSync(resultFilePath);
    }
    
    console.log('Parsing yaml files:');
    const fileNames = fs.readdirSync(dirPath);
    fileNames.forEach((fileName) => {
      console.log(`  - ${fileName}`);
      const filePath = path.resolve(dirPath, fileName);
      const file = fs.readFileSync(filePath, 'utf8');
      const document = yaml.safeLoad(file);
      results.push(document);
    });
    console.log(`Saving to ${resultFileName} file.`);
    
    fs.writeFileSync(resultFilePath, JSON.stringify(results));
    console.log('Finished successfully!');
  } catch (e) {
    console.log(e);
  }
}