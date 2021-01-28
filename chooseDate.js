fs = require('fs')

module.exports = {
    chooseMovie
}

function chooseMovie(file, date, isSort) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, data) {

        if (err) {
            return console.error(err);
        }

        if (isSort == "false") {
            let json = JSON.parse(data)

            for (let i = 0; i < json.length; i++) {

                var annee = new Date(json[i]["release_date"] * 1000).getFullYear();

                if (annee == date) {
                    let choosedMovie = (json[i]["title"] += ' (' + annee + ')')
                    console.log(choosedMovie);
                }
            }

        } else if (isSort == "true") {
            let tab = [1, 2, 4, 5, 6, 8, 9, 10, 2010, 2015, 2018, 2018, 2020, 2030]
            console.log(search(tab, date));

        } else {
            console.log("unaivaible");
        }
    })
}

function search(file, date) {
    milieux = Math.floor(file.length / 2);
    let leftfile = file.slice(0, milieux)
    let rightfile = file.slice(milieux, file.length)

    if (file[milieux] < date) {
        //console.log(file[milieux]);
        return search(rightfile, date) + leftfile.length;

    } else if (file[milieux] > date) {
        //console.log(file[milieux]);
        return search(leftfile, date);

    } else {
        return milieux;
    }
}


