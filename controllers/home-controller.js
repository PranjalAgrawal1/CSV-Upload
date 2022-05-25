const fs = require('fs');
const parse = require('csv-parser');
const assert = require('assert');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req,res,cb){
        cb(null, "file.csv");
    }
})

const upload = multer({storage: storage}).single('myFile')


module.exports.home = (req, res) => {
    res.render('home')
}


module.exports.uploadFile = (req, res) =>{
    


    upload(req,res,function(err) {

        if(err) {  
            console.log(err);
            return res.end("Error uploading file.");  
        }  

        console.log('uploaded')
        res.redirect('csv-view');  

    });  

}

module.exports.csvDisplay = (req, res) => {
    var csvData = [];
    let flag = true;
    fs.createReadStream('./uploads/file.csv')
    .pipe(parse())
    .on('data', (row) => {


        if(flag){
            let keys = Object.keys(row);
            flag = false;
            csvData.push(keys);
        }

        let dataArray = Object.keys(row).map(function(k){return row[k]});

        csvData.push(dataArray);
        // console.log(csvData);
    })
    .on('end', ()=> {
        console.log('csv file process successfully');
        // var dataArray = Object.keys(csvData).map(function(k){ return csvData[k]})


                // console.log(csvData)
        res.render('csv-view', { csvData: csvData})
    });


}