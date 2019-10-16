const filename = '../data/facebook.json'
let insights = require(filename)
function getInsight() {}

module.exports = {
    getInsight
}

function getInsight() {
    return new Promise((resolve, reject) => {
        if (insights === null) {
            reject({
                message: 'no insight available',
                status: 202
            })
        }
        resolve(insights)
    })
}
