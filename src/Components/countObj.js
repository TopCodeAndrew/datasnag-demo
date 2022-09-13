let exampleObj = {
  "fullName":"John R. Crunk",
  "ageRange":null,
  "gender":"Male",
  "location":"Okemos",
  "title":"Retiree",
  "organization":"Pandavista Enterprise",
  "twitter":null,
  "linkedin":"https://www.linkedin.com/in/johncrunk","bio":"Retiree at Pandavista Enterprise","avatar":"https://img.fullcontact.com/static/ba3e29e159e536a4cd62fabce5c9ce10_c62265b488413193629e04bc2e59c253cd1f5697230e224b8ec67f0e36a89838",
  "website":"http://pandavista.com/",
  "details":{
    "name":{
      "given":"John",
      "family":"Crunk",
      "full":"John R. Crunk"
    },
  "age":null,
  "gender":"Male",
  "demographics":{
    "gender":"Male"
  },
    "emails":[],
    "phones":[],
    "profiles":{
      "linkedin":{
        "url":"https://www.linkedin.com/in/johncrunk",
        "bio":"Retiree at Pandavista Enterprise","service":"linkedin"
      }
    },
      "locations":[
        {"city":"Okemos",
        "regionCode":"MI",
        "country":"United States",
        "formatted":"Okemos"
        },
        {"city":"Sacramento",
        "region":"California",
        "regionCode":"CA",
        "country":"United States",
        "countryCode":"US",
        "formatted":"Sacramento, California"
        },
        {"city":"Washington",
        "region":"District Of Columbia",
        "regionCode":"DC",
        "country":"United States",
        "countryCode":"US",
        "formatted":"Washington, District Of Columbia, United States"
        },
        {"country":"United States",
        "countryCode":"US",
        "formatted":"United States"}
      ],
      "employment":[
        {"name":"Pandavista Enterprise",
        "current":true,
        "title":"Retiree"
        }
      ],
      "photos":[
        {"label":"linkedin",
        "value":"https://img.fullcontact.com/static/ba3e29e159e536a4cd62fabce5c9ce10_c62265b488413193629e04bc2e59c253cd1f5697230e224b8ec67f0e36a89838"
        }],
        "education":[],"urls":[
          {"value":"http://pandavista.com/"}
        ],
        "interests":[]
    },
    "updated":"2022-07-13"}


function isArray(obj) {
  if (obj == null) {
    return false;
  } else if (typeof obj !== "object" ) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}



    // data will ALWAYS be an array or object
    let countArrDataPoints = (data)=>{
      // create a currentCount var
      if (isArray(data))

      let currentCount = 0

      if (typeof data === "object"){
        if (isArray(data)){

          // loop through as an array
        } else {
          // loop through as an object
        }
      } else {
        if (data){
          currentCount++
        }
      }


      // create a loop that can loop through both obj's and arr's
      // first thing in the loop, identify if data has "typeof" object,
        // if it does have "typeof" object, add that function (invoked) to currentCount, passing in that data
        // if it does not have "typeof" object, do the following:
          // if data is truthy, add one to the currentCount var
          // (do not need to do anything if data is falsey)
      // function should return currentCount
    }