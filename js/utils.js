'use strict'


const generateTable=(type)=>{
    
    const datas = DATASETS[type];
    let fields = [...Object.keys(datas[0])];
    let template = `<table cellspacing=0>`;
    template+= `<tbody>`;

    
    template+=`<tr>`
    for(let field of fields){
        template+=`<th>${field}</th>`
    }
    template+'</tr>'


    for(let data of datas){
        template+=`<tr>`;
            for(let keys of fields){
                if(data[keys]===null||data[keys]===undefined){
                    template+=`<td>Not Available</td>`
                }
                else if(keys==='Link'){
                    template+=`<td><a target='_blank' href=${data[keys]} >${data[keys]}</a></td>`
                }

                else{
                template+=`<td>${data[keys]}</td>`
                }
            }
        template+=`</tr>`;
    }

    template+=`</tbody>`
    template+=`</table>`
    
    
    return template;
}