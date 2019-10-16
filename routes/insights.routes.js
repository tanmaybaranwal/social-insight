const express = require('express')
const router = express.Router()
const facebook = require('../models/facebook.model')
const linkedin = require('../models/linkedin.model')

module.exports = router

router.get('/', async (req, res) => {
    res.status(400).json({ message: "ERR0R 400: Please make post requests at valid URL tails!" })
})

router.post('/facebook', async (req, res) => {
    await facebook.getInsight()
    .then(insights => res.json(insights))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/linkedin', async (req, res) => {
    await linkedin.getInsight()
    .then(insights => res.json(insights))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/linkedin/companyStatistics', async (req, res) => {
    await linkedin.getCompanyStatistics()
    .then(companyStatistics => res.json(companyStatistics))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/linkedin/followerStatistics', async (req, res) => {
    await linkedin.getFollowerStatistics()
    .then(followerStatistics => res.json(followerStatistics))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/linkedin/networkSizes', async (req, res) => {
    await linkedin.getNetworkSizes()
    .then(networkSizes => res.json(networkSizes))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/linkedin/socialAction', async (req, res) => {
    await linkedin.getSocialAction()
    .then(socialAction => res.json(socialAction))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})