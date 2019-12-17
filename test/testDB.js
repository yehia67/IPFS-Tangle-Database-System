const DB = require('../index')
const testMap = {}
for (let index = 0; index < 10; index++) {
   const arr ={
    'id':"IDD0"+index,
    'name':"Product00"+index,
    'SerialNo': 11191*index 
   }
   testMap[index] = arr 
}
const test = async()=>{
    //initalize DB
     const DBroot = await DB.create(testMap,"YARABYARAB")
    console.log("root of created DB",DBroot)  
    const readDB = await DB.read(DBroot,"YARABYARAB")
    console.log(readDB)  
    const updateDB = await DB.update(DBroot,"YARABYARAB","Yarab","ISA")
    console.log(updateDB)
    const readNewDB = await DB.read(updateDB,"YARABYARAB")
    console.log(readNewDB)
    const deleteDB = await DB.deleteRaw(updateDB,"YARABYARAB","Yarab")
    console.log(deleteDB)
    const readNewDelDB = await DB.read(deleteDB,"YARABYARAB")
    console.log(readNewDelDB)  
}
  test()