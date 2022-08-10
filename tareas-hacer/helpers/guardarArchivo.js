const fs = require("fs");

const archivo='./db/data.json';

const guardarDB = (data) => {
    fs.writeFileSync(archivo,JSON.stringify(data));
};

const leerDB = () => {
    if(fs.existsSync(archivo)){
        return null;
    }
    const info=readFileSync(archivo,{encoding:'utf8'});
    const data=JSON.parse(info);

}

module.exports={
    guardarDB,
    leerDB
}