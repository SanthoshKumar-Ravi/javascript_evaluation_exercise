var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},

];
//console.log(sort());

var lib=library.sort(function (a,b){
	var A=a.title.toLowerCase();
	var B=b.title.toLowerCase();
	if(A<B)  //The < Walter
		return -1;
	if(A>B)
		return 1;
	return 0; 

	//return a.libraryID - b.libraryID;

});
console.log(lib);

