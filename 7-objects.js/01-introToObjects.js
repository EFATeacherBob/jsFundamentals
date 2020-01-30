/*

    - container to store multiple sets of data
      - stores data as key value pairs
    - objcts a denoted b {}

    JSON View Chrome extension: 
    https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc

*/

let netflix = {
    id: 1,
    showName: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, {
                episode: 2,
                episodeName: 'Diversity Day'
            }, {
                episode: 3,
                episodeName: 'Health Care'
            }, {
                episode: 4,
                episodeName: 'The Alliance'
            }, {
                episode: 5,
                episodeName: 'Basketball'
            }, {
                episode: 6,
                episodeName: 'Hot Girl'
            }]
        }
    }, 
    season2: {},
    season3: {},
    season4: {}
}

// to access data inside of an object, or to dive into an objecet, we use dot notation

// console.log('all data:', netflix);
// console.log('season info:', netflix.season1.seasonInfo);
console.log('specific episode name:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

for (let i = 0; i < netflix.season1.seasonInfo.episodeInfo.length; i++) {
    console.log("Episode " + netflix.season1.seasonInfo.episodeInfo[i].episode + " is " + netflix.season1.seasonInfo.episodeInfo[i].episodeName);
}

/*
 
   - JSON stands for JavaScript Object Notation
   - JSON syntax is deried from JavaScript object syntax, but JSON
   data are in a text only format
   - JSON exists as a string, and needs to be converted to a native JavaScript
   object if we want to access the data

   jasonformatter.org

*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// console.log(Object.keys(spaceJam.toonSquad))
// console.log(Object.keys(spaceJam.toonSquad.duck))
// console.log(Object.keys(spaceJam.toonSquad).toString())
console.log(Object.values(spaceJam.nbaPlayers))

/*

  - object bracket notation
    - allows us to find a value in an object
    - allows us to set the key of an object
    - also handy if we want ot store keys of an object as a variable
    - all keys inside of an objet are strings, even though 
    they're not wrapped in quotes
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden); // returns an array of all keys in the object.
console.log(test);
console.log(typeof test[0]);

let zucchini = garden['vegetable'];
console.log(zucchini)

let baking = {};

baking['zucchini'] = 'better make some bread';
console.log(baking);

console.log(baking[garden['vegetable']]);

let testObj = {
    "Spaces Here" : true,
    noSpaces: true
}

console.log(testObj["Spaces Here"]);
console.log(testObj.noSpaces)