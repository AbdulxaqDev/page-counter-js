const pdfjsLib = require('pdfjs-dist');
const path = require("path");
const fs = require("fs");

const folderPath = path.join(__dirname, "path/to/folder");

fs.readdir(folderPath, (error, files) => {

    if(error){
        console.log("Error on reading files", error);
        return;
    }

    let totalPages = 0;
    let pagesPromise = []

    files.forEach(fileName => {
        pagesPromise.push(pdfjsLib.getDocument(path.join(folderPath, fileName )).promise)
    });

    Promise.all(pagesPromise).then(docs => {
        docs.forEach((doc) => {
            totalPages += doc._pdfInfo.numPages;
        })
        console.log("Total pages of files:",totalPages);
    })
});
