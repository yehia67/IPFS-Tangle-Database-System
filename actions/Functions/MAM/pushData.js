const Mam = require('@iota/mam')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')
const iotaGlobal = require('./IotaGlobal')
const pushData = async(packet) =>{

    const trytes = asciiToTrytes(JSON.stringify(packet))
    const message = Mam.create(iotaGlobal.mamState, trytes)

    // Save new mamState
    iotaGlobal.mamState = message.state

    // Attach the payload
    await Mam.attach(message.payload, message.address, 3, 9)

    return message.root
}
const test = async()=>{
    
    const result = await pushData('aaaaa')
    console.log(result)
}
test()
module.exports ={
    execute:pushData
}