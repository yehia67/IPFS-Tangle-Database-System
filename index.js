const addToIPFS = require('./actions/Functions/IPFS/add')
const manageMAM = require('./actions/Functions/MAM/manageMAM')
const catFromIPFS = require('./actions/Functions/IPFS/cat')
const getLastHash = (AsciiArray) =>{
   const lastHash = AsciiArray[AsciiArray.length-1]
   return lastHash.substring(1,lastHash.length-1)
}
const create = async(DBJSON)=>{
     const ipfsHash = await addToIPFS.execute(JSON.parse(JSON.stringify(DBJSON)))
     const root = await manageMAM.send(ipfsHash)
     return root 
}
const read = async(root)=>{
      const fetchIPFShash = await manageMAM.fetch(root)
      console.log(getLastHash(fetchIPFShash))
      const fetchedIPFS = catFromIPFS.execute(getLastHash(fetchIPFShash))
      return fetchedIPFS 
}
const update = async(root,key,value)=>{
      const DB = await read(root)
      const DBjson = JSON.parse(DB)
      DBjson[key] = value
      const newRoot = await create(DBjson)
      return newRoot
}
const deleteRaw = async(root,key)=>{
   const DB = await read(root)
   const DBjson = JSON.parse(DB)
/*    console.log('---------------')
   console.log(DBjson) */
   delete DBjson[key];
   //console.log(DBjson)
   const newRoot = await create(DBjson)
   return newRoot
}
const main = async()=>{
    const yarab = {}
    yarab['isa'] = "yarab yarab"
    yarab['bsmlah'] = "yarab yarab"
    const firstRoot = await create(yarab)
    console.log(firstRoot)
    const readFirstDB = await read(firstRoot)
    console.log(readFirstDB)
    const updateRoot = await update(firstRoot,'isa isa','yarab yarab bsmlah')
    console.log(updateRoot)
    const readUpdatedDB = await read(updateRoot)
    console.log(readUpdatedDB)
    const rootDeletedDB = await deleteRaw(updateRoot,'bsmlah')
    console.log(rootDeletedDB)
    const readThirdDB = await read(rootDeletedDB)
    console.log(readThirdDB)
}
main()
module.exports={
   create:create,
   read:read,
   update:update,
   deleteRaw:deleteRaw
}