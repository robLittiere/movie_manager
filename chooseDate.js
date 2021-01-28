fs = require('fs')

module.exports = {
    chooseMovie
}

function chooseMovie(file, new_file, date){
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();
        const movieArray = [];

        if (err){
            return console.error(err);
        }
        
        let json = JSON.parse(data)
        for (let i = 0; i < json.length; i ++){
    
            var annee = new Date(json[i]["release_date"] * 1000).getFullYear();

            if(annee == date){
                let choosedMovie = (json[i]["title"] += ' (' + annee + ')')
                movieArray.push(choosedMovie);

            } 
        }
        let string = JSON.stringify(movieArray, null, 4)
        fs.writeFile(new_file, string, function(err){
            if(err) return console.error(err);
        })   
        let endDate = Date.now();
        console.log("The movies released in %s have been listed in the file %s, it took me %s seconds to do it",date, new_file, ((endDate - startDate) / 1000)) 
    })
}

