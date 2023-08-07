const Candy= require('../models/candy');


exports.postAddCandy = async (req,res,next) => {

    try{
        const name=req.body.name;
        const description=req.body.description;
        const price=req.body.price;
        const quantity=req.body.quantity;

        const data = await Candy.create({name:name, description:description, price:price, quantity:quantity});
        res.status(201).json({newCandyDetail: data});
    } catch(err){
        res.status(500).json({error:err})
    }
}


exports.getCandies = async (req,res,next)=>{

    try{
        const candies = await Candy.findAll();
        res.status(201).json({allCandies : candies});
    } catch(err){
        console.log('GET Candy is failing', JSON.stringify(err));
        res.status(500).json({error:err})
    }
}



exports.editCandy = (req,res,next)=>{
    
    try{
        if(req.params.id=='undefined'){
            console.log('Id is missing')
            return res.status(400).json({err: 'Id is missing'});
        }

        const name=req.body.name;
        const description=req.body.description;
        const price=req.body.price;
        const quantity=req.body.quantity;

        const uId = req.params.id;

        Candy.findByPk(uId)
        .then(candy=>{
         candy.name = name;
         candy.description = description;
         candy.price = price;
         candy.quantity = quantity;
         return candy.save();
        })
        .then(result =>{
            console.log('Updated Candy');
            res.status(200).json({editedCandyDetail: result});
          })
        .catch(err => console.log(err))
      
    } catch(err){
        console.log(err);
        res.status(500).json({error:err})
    }
}

