fs = require('fs')

module.exports = {
    sort_title
}



function sort_title(file, new_file){
    
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        let changed;
        do {
            changed = false;
            for(let i=0; i < json.length-1; i++) {
                if(json[i].title > json[i+1].title) {
                    let tmp = json[i];
                    json[i] = json[i+1];
                    json[i+1] = tmp;
                    changed = true;
                }
            }
        }     
        while(changed);
    

        //Write json objects in new file
        //Convert JSON objects to beautiful string
        let string = JSON.stringify(json, null, 4)
            
        fs.writeFile(new_file, string, function(err){
            if(err) return console.error(err);
        })
    });
}