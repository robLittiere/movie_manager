fs = require('fs')

module.exports = {
    findMovie,
};
    


function findMovie(file, keyword, genre){
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

        if(movie_par_genre.length != 0){
            let movie_genre_description = [];
            for (let i = 0; i < movie_par_genre.length; i++){
                let string = movie_par_genre[i].overview;
                let overview = string.split(" ")
                for (let j = 0; j < overview.length; j++){
                    if (keyword == overview[j]){
                        movie_genre_description.push(movie_par_genre[i])
                    }
                }
            }    
            
            if (movie_genre_description.length != 0){

                let most_recent_movie;
                for (let i = 0; i < movie_genre_description.length; i++){
                    if (i == movie_genre_description.length - 1){
                        if(most_recent_movie < movie_genre_description[i].release_date){
                            most_recent_movie = movie_genre_description[i]
                            
                        }
                    }

                    else if (movie_genre_description[i].release_date > movie_genre_description[i + 1].release_date){
                        most_recent_movie = movie_genre_description[i]
            
                    }

                    else if (movie_genre_description[i].release_date == movie_genre_description[i + 1].release_date){
                        most_recent_movie = movie_genre_description[i]
                    }
                    else{
                        most_recent_movie = movie_genre_description[i + 1]
                    }
                }

                console.log("The most recent %s movie containing the keyword %s is %s ", genre, keyword, most_recent_movie.title)
                let endDate = Date.now();
                console.log("It took me %s seconds to find it", (endDate - startDate) / 1000)
            }
            else {
                console.log("There are words in the %s movies description that match your keyword %s", genre, keyword)
            }    
        }  

        else {
                console.log("There are no movies in the genre %s or you entered a genre that doesn't exist in our database", genre)
        }         
    })
}    

