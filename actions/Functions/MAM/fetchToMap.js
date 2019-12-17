const catIPFS = require('./cat')
const mamManage = require('./testMam')
const getLastHash = (AsciiArray) =>{
    const lastHash = AsciiArray[AsciiArray.length-1]
    return lastHash.substring(1,lastHash.length-1)
}
const execute = async(address)=>{
    const hash = await mamManage.fetch(address)
    const stringMap = await catIPFS.execute(getLastHash(hash))
    return JSON.parse(stringMap)

}
module.exports ={
    execute:execute
}

