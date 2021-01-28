fs = require('fs')
const sort = require('./sort.js');


function findMovie(file, genre){
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();
        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        let movie_par_genre = []
        let count = 0
        for (let i = 0; i < json.length; i++){
            console.log(i)
            console.log(json[i].genres)
            if (json.hasOwnProperty("genres")){
                for(let j = 0; j < json[i].genres.length; j++){
                    if (genre = json[i].genres[j]){
                        movie_par_genre.push(json[i])
                    }
                }    
            }

        }

        console.log(movie_par_genre);

    


    })
}    


findMovie('JSON/movies.json', 'Fantasy');