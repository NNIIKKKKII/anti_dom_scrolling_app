import NodeCache from "node-cache";


const cache = new NodeCache({
    stdTTL: 600,
    checkPeriod: 120
})

export default cache;