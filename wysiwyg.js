var famousPeople=[{title: "Actor", name: "Harrison Ford", bio: "American actor born in Chicago Illinois most noteable as playing Han Solo in the Star Wars series.",img: "https://en.wikipedia.org/wiki/Harrison_Ford#/media/File:Harrison_Ford_by_Gage_Skidmore_2.jpg", lifespan:{birth:1942,death: 2030}}, {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}, {
  title: "Donald Trump",
  name: "President",
  bio: "Americas 45th elected president who took office in January 2017. Before he was better known as an entreprenuer and as a tv personality.",
  image: "https://en.wikipedia.org/wiki/Donald_Trump#/media/File:Donald_Trump_official_portrait.jpg",
  lifespan: {
    birth: 1946,
    death: 2035
  }
}

];
var output= document.getElementById('output');
var containerPerson= document.getElementsByClassName('person');

var counter=0;
for (;counter<5;counter++){
	output.innerHTML= `<div class="person" id="person--${counter}"></div>`;
}
for (var i=0; i<containerPerson.length; i++){
	containerPerson[i].addEventListener('click', function(event){

	});
};

for (var i=0; i< famousPeople.length; i++){
	containerPerson= `	<person>
	  	<header id="nameTitle" class="odd">${famousPeople[i].name} ${famousPeople[i].title}</header>
	  	<section id="bioImage" class="even">${famousPeople[i].bio} ${famousPeople[i].img}</section>
	  	<footer id="lifespan" class="odd">${famousPeople[i].lifespan.birth}-${famousPeople[i].lifespan.death}</footer>
	</person>`;
	output.innerHTML +=containerPerson;
}