export default class Keyword {
	constructor() {
		this.url = "http://46.101.102.65/api/keywords/";
		this.itemList = document.getElementById("list");
	}

	getKeywords() {
		this.itemList.innerHTML ='';
		fetch(this.url)
			.then(response => response.json())
			.then(data => {
				for (let item of data) {
					let elem = document.createElement("li");
					elem.className = "list-group-item";
					let a = document.createElement("a");
					a.textContent = item;
					a.href = '#' + item;
					elem.appendChild(a) 
					this.itemList.appendChild(elem);
				}
			});
	}
}
