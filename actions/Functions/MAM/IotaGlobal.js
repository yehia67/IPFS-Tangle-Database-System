const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')
const Mam = require('@iota/mam')
const seed = 'XGIVJKNUIDKDVAXGRK9SFXYFVOLEHSJOIZVROT9DUAMYUUXPPBZWYQWJNEYPVKOMKR9SNRYSZXUHDFKNB'

// Define the depth that the node will use for tip selection
const depth = 3;
// Define the minimum weight magnitude for the Devnet
const minimumWeightMagnitude = 9;
//MAM
const providerLink = 'https://nodes.devnet.iota.org:443'
const sideKey = 'DONTSHARETHISPASSWORD'

let mamState = Mam.init(providerLink)
mamState = Mam.changeMode(mamState, 'restricted', sideKey)

const iota =iotaLibrary.composeAPI({
    provider: providerLink
})
//Modified functions
const lengthModifier = (str) =>{ return str.substring( str.lastIndexOf("{"),str.lastIndexOf("}")+1) }


module.exports = {
    iotaLibrary : iotaLibrary ,
    converter : Converter ,
    provider:providerLink,
    depth:depth,
    minimumWeightMagnitude:minimumWeightMagnitude,
    Mam : Mam ,
    mamState:mamState,
    seed : seed ,
    sideKey:sideKey,
    lengthModifier:lengthModifier,
    iota : iota
}
