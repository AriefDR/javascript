function panggilFilterParam(val) {
	var arr = [
	{negara: 'Indonesia',benua: 'Asia'},
	{negara: 'Amerika',benua: 'Amerika'},
	{negara: 'Jerman',benua: 'Eropa'},
	{negara: 'Spanyol',benua: 'Eropa'},
	];
	var benuaEropa = arr.filter(function(index) {
		return arr.index === 'Eropa'
	});
	console.log(benuaEropa)
}
console.log(panggilFilterParameters(val))