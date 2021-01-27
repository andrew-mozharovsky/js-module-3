const bestUser = {
    developers: {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  },
  supports: {
    poly: 12,
    mango: 17,
    ajax: 4,
  },
  sellers: {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  },
//   alkashi: {
//     Luda: 147,
//     Roma: 21,
//     Den: 19,
//     VASIL: 400,
//   },
  
};

const findViner = function logBestUser(object){
    const valueBestUser = Object.values(object)//доступ к свойствам обьекта
    // const keysBestUser = Object.values(object)
    let finMaxValue =0;
    let findIndexMaxValue = 0;
    for (let i=0; i<valueBestUser.length; i+=1){
        finMaxValue = Math.max(...Object.values(valueBestUser[i]));
        findIndexMaxValue = Object.values(valueBestUser[i]).indexOf(finMaxValue);
                let resalt = Object.keys(valueBestUser[i])[findIndexMaxValue]
        console.log(`В команде  ${Object.keys(object)[i]}  лучший сотрудник  ${resalt}`)
    }
 
    
 }

 findViner(bestUser);
