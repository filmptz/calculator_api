  
var express = require("express");
var router = express.Router();

router.get("/cal", (req, res)=> {
  var input = req.query;
  var a = parseInt(input.a) || 0;
  var b = parseInt(input.b) || 0;
  var opr = input.opr
  var result 

  if(opr === 'add'){
    result = a + b;
  }
  else if(opr === 'sub'){
    result = a - b;
  }
  else if (opr === 'mul'){
    result = a * b;
  }
  else if (opr ==='div'){
    if (b == 0 ) result = 'NaN'
    else result = a / b;
  }

  res.json({
      Equation : a+" "+opr+" "+b,
      Result : result
    });
});

router.get('/add',(req,res)=>{
  var input = req.query;
  var a = parseInt(input.a) || 0;
  var b = parseInt(input.b) || 0;
  var result = a + b

  res.json({
      Result = result
  })

})

router.get('/sub',(req,res)=>{
    var input = req.query;
    var a = parseInt(input.a) || 0;
    var b = parseInt(input.b) || 0;
    var result = a - b
  
    res.json({
        Result = result
    })
    
  })

module.exports = router;