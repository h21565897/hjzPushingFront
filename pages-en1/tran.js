const translator = require('@parvineyvazov/json-translator');
const fs=require("fs");
async function translateFile1(files){
    for(const file of files){
        let path=file;
        console.log(file);
        await translator.translateFile(
            path,
            translator.languages.Chinese_Simplified,
            translator.languages.English
          );
        await fs.rename("en.json","tranres/"+path,(err)=>{

        });
    }
}
fs.readdir("./",(err,files)=>{
    translateFile1(files)
})
