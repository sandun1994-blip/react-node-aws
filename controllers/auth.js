exports.register=(req,res)=>{


    console.log(req.body);
    return res.json({data:req.body})
}