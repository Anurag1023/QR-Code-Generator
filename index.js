import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
 

 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

inquirer
  .prompt([
    {
      message: "Write your url: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });
