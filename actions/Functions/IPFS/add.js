const ipfsLibrary = require('ipfs-http-client')
const ipfs = new ipfsLibrary({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
const add = async (data) =>{
   const hash = await ipfs.add(JSON.stringify(data))
     return hash[0].path
}
module.exports = {
    execute : add
}