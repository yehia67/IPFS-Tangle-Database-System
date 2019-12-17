const upload = require('../actions/Functions/IPFS/add')
const fetch = require('../actions/Functions/IPFS/cat')

const test = async()=>{
    const data = {}
    data['yarab'] = 'yarab'
    data['isa'] = 'isa'
    data['el7'] = 'el7'
    const root = await upload.execute(data)
    console.log(root)  
    const result = await fetch.execute(root)
   console.log(result)
}
test()