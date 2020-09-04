const express = require('express');
const router = express.Router();
const crypto = require("crypto-js")
const db = require('../db.js');

router.post('/list', (req, res, next) => {
    var sql = "select * from user";

    var data = req.body;
    var page = data.page;
    var display = data.display;
    var total = 0;

    db.query(sql, (err, results) => {
        if (err) throw err;

        total = results.length;
        var num_pages = Math.ceil(total / display);
        var previous_page = (page - 1) <= 0 ? 1 : page - 1;
        var next_page = (page + 1) > num_pages ? num_pages : page + 1;
        var fromValue = 0;
        var endValue = total;
        if (results.length > 0) {
            fromValue = (page - 1) * display;
            endValue = (fromValue + display) > total ? total : (fromValue + display);
        }
        res.status(200).json({
            message: "ok",
            users: results.slice(fromValue, endValue),
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

router.get('/detail/:id', (req, res, next) => {
    var sql = "select * from user where id=?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) throw err;

        res.status(200).json({
            message: "ok",
            user: results[0] ? results[0] : null
        })
    })
})

router.post('/create', (req, res, next) => {
    tmpUser = req.body;
    var sql = "select * from user where email=?";
    db.query(sql, [tmpUser.email], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.status(400).json({
                message: 'Không tồn tại tài khoản'
            })
        } else {
            sql = "insert into user set ?";
            tmpUser.password = crypto.MD5(tmpUser.password).toString();
            db.query(sql, tmpUser, (err, results) => {
                if (err) throw err;
                res.status(200).json({
                    message: "ok",
                    user: tmpUser
                })
            })
        }
    })
})

router.post('/login', (req, res, next) => {
    tmpLogin = req.body;
    console.log(tmpLogin);
    var sql = "select * from user where email=?";
    db.query(sql, [tmpLogin.email], (err, results) => {
        if (err) throw err;

        if (results.length <= 0) {
            res.status(400).json({
                message: 'Không tồn tại tài khoản'
            })
        } else {
            tmpUser = results[0];
            console.log(tmpUser);
            if (tmpUser.password == crypto.MD5(tmpLogin.password).toString()) {
                res.status(200).json({
                    message: "ok",
                    user: results[0]
                })
            } else {
                res.status(400).json({
                    message: 'Mật khẩu không đúng'
                })
            }
        }
    })
})

router.put('/update', (req, res, next) => {
    var sql = "update user set ? where id = ?";
    let tmpUser = req.body;
    db.query(sql, [tmpUser, req.body.id], (err, results) => {
        if (err) throw err;
        res.status(200).json({
            message: "ok",
        })
    })
})

router.delete('/delete/:id', (req, res, next) => {
    var sql = "delete from user where id=?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            res.status(400).json({
                message: err
            })
        }

        res.status(200).json({
            message: "delete success",
        })
    })
})

module.exports = router