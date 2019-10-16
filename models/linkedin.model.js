const filename = '../data/linkedin.json'
let insights = require(filename)
function getCompanyStatistics() {}
function getFollowerStatistics() {}
function getNetworkSizes() {}
function getSocialAction() {}
function getInsight() {}

module.exports = {
    getCompanyStatistics,
    getFollowerStatistics,
    getNetworkSizes,
    getSocialAction,
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


function getCompanyStatistics() {
    return new Promise((resolve, reject) => {
        companyStatistics = insights["companyStatistics"]
        if (companyStatistics === null) {
            reject({
                message: 'no stats available',
                status: 202
            })
        }
        resolve(companyStatistics)
    })
}

function getFollowerStatistics() {
    return new Promise((resolve, reject) => {
        followerStatistics = insights["followerStatistics"]
        if (followerStatistics === null){
            reject({
                message: 'no follower stats available',
                status: 202
            })
        }
        resolve(followerStatistics)
    })
}

function getNetworkSizes() {
    return new Promise((resolve, reject) => {
        networkSizes = insights["networkSizes"] 
        if (networkSizes === null){
            reject({
                message: 'no network available',
                status: 202
            })
        }
        resolve(networkSizes)
    })
}

function getSocialAction() {
    return new Promise((resolve, reject) => {
        socialAction = insights["socialAction"]
        if (socialAction === null){
            reject({
                message: 'no network available',
                status: 202
            })
        }
        resolve(socialAction)
    })
}