fs = require('fs')

module.exports = {
    transform 
}

function transform(file, new_file){
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        for (let i = 0; i < json.length; i ++){
    
            //Get year from JSON's release date
            //Convert seconds from 1970 to actual year
            let year = new Date(json[i]["release_date"] * 1000).getFullYear();   
            //Write year next to the title
            (json[i]["title"] += ' (' + year + ')')
        }
    
        //Write json objects in new file
        //Convert JSON objects to beautiful string
        let string = JSON.stringify(json, null, 4)
        
        fs.writeFile(new_file, string, function(err){
            if(err) return console.error(err);
        })
    
        //console.log(json[i]["title"] += ' (' + year + ')')
    })
}
