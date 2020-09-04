const express = require('express');
const router = express.Router();

const db = require('../db.js');

router.post('/list', (req, res, next) => {
    var searchVal = req.body;
    var searchValue = searchVal.text ? searchVal.text : "";
    searchValue = "%"+searchValue+"%"
    var sql = "select * from job where job_title like ?";
    db.query(sql, [searchValue], (err, results) => {
        if (err) throw err;
        res.status(200).json({
            message: "ok",
            jobs: results ? results : null
        })
    })
})

router.get('/list/user/:userId', (req, res, next) => {
    var sql = "select * from job where id_user=?";
    db.query(sql, [req.params.userId], (err, results) => {
        if (err) throw err;
        res.status(200).json({
            message: "ok",
            jobs: results ? results : null
        })
    })
})

router.get('/list/:id', (req, res, next) => {
    var sql = "select * from job where id=?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) throw err;
        res.status(200).json({
            message: "ok",
            job: results ? results : null
        })
    })
})



router.post('/create', (req, res, next) => {
    var sql = "insert into job set ?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) throw err;
        res.status(200).json({
            message: "ok",
            job: req.body
        })
    })
})

router.put('/update', (req, res, next) => {
    var sql = "update job set ? where id = ?";
    let tmpJob = req.body;
    db.query(sql, [tmpJob, tmpJob.id], (err, results) => {
        if (err) throw err;
        res.status(200).json({
            message: "ok",
        })
    })
})

router.delete('/delete/:id', (req, res, next) => {
    var sql = "delete from job where id=?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) throw err;

        res.status(200).json({
            message: "delete success",
        })
    })
})

module.exports = router
