const express = require('express');
const router = express.Router();
const crypto = require("crypto-js")
const db = require('../db.js');

router.get('/list', (req, res, next) => {
    var sql = "select * from user";
    db.query(sql, (err, results) => {
        if (err) throw err;

        res.status(200).json({
            message: "ok",
            users: results
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

        if (results.length >  0) {
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