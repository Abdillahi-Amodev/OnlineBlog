
const Blog = require('../model/base.js')


module.exports={
    getBlogs:async(req,res)=>{
         try {
            const allpost = await Blog.find()
            res.render('home',{
                title:'home',
                allpost: allpost
            });
         } catch (error) {
             console.log(errpr);

         }
    },
    getSingleBlogs:async(req,res)=>{
         try {
            const singlePost = await Blog.findById(req.params.id)
             res.render('single',{
                 singlePost
             });
         } catch (error) {
             console.log(errpr);

         }
    },

    getAdmin:(req,res)=>{
         res.send(' magasin ');
    },

    getAdminDashboard:(req,res)=>{
        res.send(' mashallah ');
    },

    postAdmin:async(req,res)=>{
        const newPost =new Blog(req.body);
         try {
           const  post =await newPost.save()
           console.log(post);
           res.send(post)
         } catch (error) {
             console.log(error);

         }
    },

}