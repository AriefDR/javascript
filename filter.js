function panggilFilter(){
    var arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'}
    ];
    var benuaAsia = arr.filter((item)=>{
        return item.benua === 'Eropa';
    });

    return benuaAsia;
}

console.log(panggilFilter());