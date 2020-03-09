console.log('hello')

let url = 'docs.google.com/spreadsheets/d/1-fYybuYXtChuaZc83JI35Pp0NER3E5oz6RC5sboKoVU/edit#gid=0'

let id = '1-fYybuYXtChuaZc83JI35Pp0NER3E5oz6RC5sboKoVU'

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

let test = `https://spreadsheets.google.com/feeds/list/1-fYybuYXtChuaZc83JI35Pp0NER3E5oz6RC5sboKoVU/od6/public/values?alt=json`

//this is how it works
fetch(source)
  .then( response => response.json() ) // this parses the data from string to object
  .then( data => {
  console.log(data)
  let projects = data.feed.entry.map( project => {
    // console.log(project.gsx$title.$t)
    return { 
      title: project.gsx$title.$t,
      image: project.gsx$image.$t,
      description: project.gsx$description.$t,
      url: project.gsx$url.$t
    }
  })
  app(projects)
}) // this provides us access to the parsed data

function app (projects) {
  console.log(projects)
  //the rest of the code goes here, like what we need to do with the data
}


// let projects = [
//    {title: 'title of project', image: 'image url', description: 'some desc', url: 'url to project'}
//  ]