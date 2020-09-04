const express = require('express');
const router = express.Router();

const db = require('../db.js');

router.post('/list', (req, res, next) => {
    var sql = "select * from job where job_title like ?";

    var data = req.body;
    var searchValue = data.text ? data.text : "";
    var page = data.page;
    var display = data.display;
    var total = 0;
    searchValue = "%" + searchValue + "%"

    db.query(sql, [searchValue], (err, results) => {
        if (err) throw err;

        total = results.length;
        console.log(total);
        var num_pages = Math.ceil(total / display);
        var previous_page = (page - 1) <= 0 ? 1 : page - 1;
        var next_page = (page + 1) > num_pages ? num_pages : page + 1;
        var fromValue = 0;
        var endValue = total;
        if (results.length > 0) {
            fromValue = (page - 1) * display - 1;
            endValue = (fromValue + display) > total ? total : (fromValue + display);
        }
        res.status(200).json({
            message: "ok",
            jobs: results.slice(fromValue, endValue),
            _meta: {
                total: total,
                num_pages: num_pages,
                current_page: page,
                previous_page: previous_page,
                next_page: next_page,
                num_per_page: display
            }
        })
    })



})

router.post('/list/user/:userId', (req, res, next) => {
    var sql = "select * from job where id_user=?";
    var data = req.body;
    var page = data.page;
    var display = data.display;
    var total = 0;

    db.query(sql, [req.params.userId], (err, results) => {
        if (err) throw err;

        total = results.length;
        var num_pages = Math.ceil(total / display);
        var previous_page = (page - 1) <= 0 ? 1 : page - 1;
        var next_page = (page + 1) > num_pages ? num_pages : page + 1;
        var fromValue = 0;
        var endValue = total;
        if (results.length > 0) {
            fromValue = (page - 1) * display - 1;
            endValue = (fromValue + display) > total ? total : (fromValue + display);
        }
        res.status(200).json({
            message: "ok",
            jobs: results.slice(fromValue, endValue),
            _meta: {
                total: total,
                num_pages: num_pages,
                current_page: page,
                previous_page: previous_page,
                next_page: next_page,
                num_per_page: display
            }
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