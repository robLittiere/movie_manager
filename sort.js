fs = require('fs')

module.exports = {
    sort_title,
    tri_rapide,
    sort_date,
    swap,
    partitionner
}


/*
function sort_title(file, new_file){
    
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();

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
        let endDate = Date.now();
        console.log("The movies have been sorted in alphabetical order according to their title in the file %s, it took me %s seconds to do it", new_file, ((endDate - startDate) / 1000)) 
    });
}
*/


function swap(tab,a,b, property){
    let tmp = tab[a];
    tab[a] = tab[b];
    tab[b] = tmp;
}


function partitionner(t, premier,dernier,pivot, property){
    //échanger T[pivot] et T[dernier]  // échange le pivot avec le dernier du tableau , le pivot devient le dernier du tableau
    swap(t,pivot,dernier, property)
    //j := premier
    j = premier
    //pour i de premier à dernier - 1 // la boucle se termine quand i = (dernier-1).
    for(i=premier;i<=dernier-1;i++) {
        //si T[i] <= T[dernier] alors
        if( t[i][property]<t[dernier][property]){
            //échanger T[i] et T[j]
            swap(t, i, j, property);
            //j := j + 1
            j = j + 1 
        }
    }
    //échanger T[dernier] et T[j]
    swap(t, dernier, j, property)
    //renvoyer j
    return j
}

function tri_rapide(t, premier, dernier, property){
    //si premier < dernier alors
    if(premier < dernier){
        //pivot := (premier + dernier) /2
        let pivot = Math.floor((premier + dernier) / 2)
        //pivot := partitionner(T, premier, dernier, pivot)
        pivot = partitionner(t,premier,dernier,pivot, property)
        //tri_rapide(T, premier, pivot-1)
        tri_rapide(t, premier, pivot-1, property)
        //tri_rapide(T, pivot+1, dernier)
        tri_rapide(t, pivot+1, dernier, property)
    }
}


function sort_title(file, new_file){
    
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();

        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        
        tri_rapide(json, 0, json.length-1, 'title')

        //Write json objects in new file
        //Convert JSON objects to beautiful string
        let string = JSON.stringify(json, null, 4)
            
        fs.writeFile(new_file, string, function(err){
            if(err) return console.error(err);
        })
        let endDate = Date.now();
        console.log("The movies have been sorted in alphabetical order according to their title in the file %s, it took me %s seconds to do it", new_file, ((endDate - startDate) / 1000)) 
    });
}


function sort_date(file, new_file){
    
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();

        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        
        tri_rapide(json, 0, json.length-1, 'release_date')

        //Write json objects in new file
        //Convert JSON objects to beautiful string
        let string = JSON.stringify(json, null, 4)
            
        fs.writeFile(new_file, string, function(err){
            if(err) return console.error(err);
        })
        let endDate = Date.now();
        console.log("The movies have by date in the file %s, it took me %s seconds to do it", new_file, ((endDate - startDate) / 1000)) 
    });
}


