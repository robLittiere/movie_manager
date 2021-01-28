fs = require('fs')
const sort = require('./sort.js');




function findMovie(file, genre, keyword){
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();
        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        let movie_par_genre = []
        for (let i = 0; i < json.length; i++){
            if (json[i].hasOwnProperty("genres")){
                for(let j = 0; j < json[i].genres.length; j++){
                    if (genre == json[i].genres[j]){
                        movie_par_genre.push(json[i])
                    }
                }    
            }
        }
        let movie_genre_description = [];
        for (let i = 0; i < movie_par_genre.length; i++){
            let string = movie_par_genre[i].overview;
            let overview = string.split(" ")
            for (let j = 0; j < overview.length; j++){
                if (keyword == overview[j]){
                    movie_genre_description.push(json[i])
                }
            }
        }    



        console.log(movie_genre_description);

    })
}    


findMovie('JSON/movies.json', 'Fantasy', 'biologist');