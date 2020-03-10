console.log('hello')

let url = 'docs.google.com/spreadsheets/d/1-fYybuYXtChuaZc83JI35Pp0NER3E5oz6RC5sboKoVU/edit#gid=0'

let id = '1-fYybuYXtChuaZc83JI35Pp0NER3E5oz6RC5sboKoVU'

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

let test = `https://spreadsheets.google.com/feeds/list/1-fYybuYXtChuaZc83JI35Pp0NER3E5oz6RC5sboKoVU/od6/public/values?alt=json`

//this is how it works
fetch(source)
  .then( response => response.json() ) // this parses the data from string to object
  .then( data => {
    console.log('data', data)
    // data.feed.entry is the array that stores our projects
    // the projects are stored as objects
    let projects = data.feed.entry.map( project => {
      // console.log('project', project.gsx$title.$t)
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        url: project.gsx$url.$t
      }
    })
  app(projects)
})
.catch( err => console.log('err', err))

function app(projects) {
console.log('app - projects', projects)

  //the rest of the code goes here, like what we need to do with the data
  function createMyProjects(){
    for(let i =0; i < projects.length; i++){
        let $article = $(`
        <article id="3685" class="location-listing">
           <a class="project-titles" href=${projects[i].url}>${projects[i].title}</a>
        <div class="project-image">
        <a href=${projects[i].url}>
             <img width="100%" height="100%" src=${projects[i].image} alt=""></a>
        </div>
        </article>`)

        $('#grid-container').append($article)
    }
  }
  createMyProjects()
}


// let projects = [
//    {title: 'title of project', image: 'image url', description: 'some desc', url: 'url to project'}
//  ]
