var famousPeople=[{title: "Actor", name: "Harrison Ford", bio: "American actor born in Chicago Illinois most noteable as playing Han Solo in the Star Wars series.",image: "http://img2-1.timeinc.net/people/i/2015/news/150316/harrison-ford-7-435.jpg", lifespan:{birth:1942,death: "Present"}}, 
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}, 
{
  title: "President",
  name: "Donald Trump",
  bio: "Americas 45th elected president who took office in January 2017. Before he was better known as an entreprenuer and as a tv personality.",
  image: "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg",
  lifespan: {
    birth: 1946,
    death: "Present"
  }
}

];
var input= document.getElementById('input');
var output= document.getElementById('output');
var containerPerson= document.getElementsByClassName('person');
var personName= document.getElementsByClassName('name');
var person= document.getElementsByClassName('famousPerson')

var counter=0;
for (;counter<5;counter++){
	output.innerHTML= `<div class="person" id="person--${counter}"></div>`;
}


for (var i=0; i< famousPeople.length; i++){
	containerPerson= `	<div class="famousPerson">
	  	<h1 class="odd name">${famousPeople[i].name}</h1><h2 class="title even"> ${famousPeople[i].title}</h2>
	  	<section class="odd bio">${famousPeople[i].bio}</section>
	  	<img src="${famousPeople[i].image}" class="image even" alt="image of ${famousPeople[i].image}"> 
	  	<footer id="lifespan" class="even">${famousPeople[i].lifespan.birth}-${famousPeople[i].lifespan.death}</footer>
	</div>`;
	output.innerHTML +=containerPerson;
}
for (var i=0; i<person.length; i++){
	person[i].addEventListener('click', function(event){
		event.target.classList.toggle('dotted');
		input.focus();
	});
};








