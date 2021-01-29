const fs = require('fs');
const { get } = require('http');
const request = require('request');

module.exports = {
    getImagesFromMovies,
}


function getImagesFromMovies (movie_tab, path){
    let startDate = Date.now();
    for (let i = 0; i < movie_tab.length; i++){
        if(movie_tab[i].hasOwnProperty("poster")){

            download(movie_tab[i].poster, (path+ '/' + movie_tab[i].title + '.jpg'), () => {
                
            })

        }
    }
    let endDate = Date.now()
    console.log('Your images have been saved to the folder %s, The process took me %s seconds', path, ((endDate - startDate) / 1000))
}

const download = (url, path, callback) => {
    request.head(url, (err, res, body) =>{
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
}

