const fs = require("fs");
const path = require("path");

// Change the path to your desktop's or any other folder 
const PATH = "";

const desktopPath = path.join(PATH);
const files = fs.readdirSync(desktopPath);

for (const file of files) {
  const filePath = path.join(desktopPath, file);
  const fileExtension = path.extname(file).toLowerCase();
  const folderPath = path.join(desktopPath, fileExtension.slice(1));

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  fs.renameSync(filePath, path.join(folderPath, file));
}
