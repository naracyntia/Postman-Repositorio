const fs = require('fs');

const resultFiles = [
    'results/aLogin.json',
    'results/Cadastro.json',
    'results/Editar.json',
    'results/Excluir.json',
    'results/Listar.json'
];

let mergedResults = {
    info: {
        name: "Merged Results",
        schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    item: []
};

resultFiles.forEach((file) => {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    mergedResults.item = mergedResults.item.concat(data.item);
});

fs.writeFileSync('results/merged-result.json', JSON.stringify(mergedResults, null, 2));
