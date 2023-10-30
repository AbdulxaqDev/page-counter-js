# page-counter-js
A pdf page counter. Counts total number of multiple pdf files' pages in the same folder.
For example, if you have two pdfs in a folder, which contain of 15 pages and 10 pages respectively. The application gives toal number of pages, 25.

Clone the project to your device and run following command: 

```bash
  npm install
```

And put your folder's path, which contains your pdf files:

```javascript
const folderPath = path.join(__dirname, "path/to/folder"); // put your folder path
```

Save the files and run:

```bash
npm run count
```

And it will log the total number of all pdf's pages in the folder.
