import userModel from "../models/userModels.js"

//add to cart
const addToCart= async(req,res)=>{
      try{
        let userData= await userModel.findById(req.body.userId)
      
       let cartData= await userData.cartData
        
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId] +=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message:"Added To Cart"})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
        

    }


}

//remove tocart
const removeToCart= async(req,res)=>{

  try{
    let userData= await userModel.findById(req.body.userId)
    let cartData=await userData.cartData
     if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-= 1
        }
       
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"removed from cart item"})

  } 

  catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})


  }
    
}
const getCart= async(req,res)=>{
    try{
        let userData= await userModel.findById(req.body.userId)
    let cartData=await userData.cartData
    res.json({success:true,cartData})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
    
}
export {addToCart, removeToCart,getCart}