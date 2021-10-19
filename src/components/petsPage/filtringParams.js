export  const weightFilter = [
    { value: 'ascending', label: 'ascending' },
    { value: 'descending', label: 'descending' }
]

export const typesSet = (pets) => {
    const types =[]
    pets.forEach(el => {
        if (!types.includes(el.__typename)){
            types.push(el.__typename)
        } 
    });
    return types.map(el => ({ value: el, label: el }))
}


export  const filterFunc = (arr, paramsOfFilters) =>{
    let array= [...arr]
    if(paramsOfFilters.weight){
        paramsOfFilters.weight === "ascending" ? 
            array.sort((a,b)=> a.weight>b.weight ?  1 : -1) :
            array.sort((a,b)=> a.weight<b.weight ?  1 : -1)  
    }  
    if(paramsOfFilters.types){
       array =  array.filter(pet=>
            pet.__typename === paramsOfFilters.types 
        )
    } 
    return array
}