import Keyword from './keyword';
import Plot from './plot';

const keyword = new Keyword();
const plot = new Plot();

function setView() {
	const container = document.getElementById('container');
	const jumbotron = document.getElementById('jumbotron');
	const card = document.getElementById('card');
	const rows = document.getElementById('rows');

	let hash = document.location.hash.replace('#','');
	if(hash) {
		card.style.display='none';
		jumbotron.style.display='block';
		rows.style.display='block';
		console.log(hash);
		plot.drawPlots(hash);

	}
	else {
		keyword.getKeywords();
		card.style.display='block';
		jumbotron.style.display='none';
		rows.style.display='none';
	}
}
window.addEventListener('load', setView)
window.addEventListener("hashchange",setView)