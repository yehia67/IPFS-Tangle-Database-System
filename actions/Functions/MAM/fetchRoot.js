const iotaGlobal = require('./IotaGlobal')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')


const fetchRoot = async(_root)=>{
    const resp = await  iotaGlobal.Mam.fetch(_root, 'restricted', iotaGlobal.sideKey)
    const tryteMessages = resp.messages
    const asciiMessages = []
    for (let index = 0; index < tryteMessages.length; index++) {
        asciiMessages.push(iotaGlobal.converter.trytesToAscii(tryteMessages[index]))
    }
     return asciiMessages
}
const test = async()=>{
    
    const result = await fetchRoot('VDFYGWNSQU9RAIATFDHBEZLPZSGTTAXDNZIVAKBTQJCTZFXJDYIITFYEDRVA9Z9AQSSKCPDTJMVEMHDQR')
    console.log(result)
}
//test()
module.exports = {
    execute:fetchRoot
}