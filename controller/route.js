const express = require('express')
const route =express.Router();
const controller =require('../controller/controller.js')






route.get('/:id', controller.getSingleBlogs)
route.get('/', controller.getBlogs)
route.get('/admin', controller.getAdmin)
route.get('/admin/dashboard', controller.getAdminDashboard)
route.get('/admin/post', controller.getAdminPost)
route.post('/admin/post', controller.postAdmin)












module.exports=route