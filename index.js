const express=require('express')
const cors=require('cors')
const app=new express();
const PORT =4000;
app.use(express.json());
// connect the connection.js to server file
require('./connection');
const movieData=require('./model/MovieData')
app.use(express.json());
app.use(cors());
// API fetch data from DB
app.post('/new-movies', async(req,res)=>{
    try{ 
        var item=req.body;
        const dataitem=new movieData(item);
        const saveddata= await dataitem.save();
        res.send('post successful');
    
        
    }
    catch(error){
        console.log("Error");
    }
}

)
app.get('/list-movies', async(req,res)=>{
    try{ 
        const data= await movieData.find();
        res.send(data);   
    }
    catch(error){
        console.log("Error");
    }
}

)
// API endpoint for deleting the movie document
app.delete('/movieremoval/:id',async(req,res)=>{
    try{
        await movieData.findByIdAndDelete(req.params.id);
        res.send('Deleted Successfully');
    }
    catch(error){
        console.log(error);
    }
})
// for updating
app.put('/movie-updation/:id', async(req,res)=>{
    try {
      await movieData.findByIdAndUpdate(req.params.id,req.body)
      res.send("updated successfully")
    } 
    catch (error) {
      console.log(error);
    }
  });
// checking whether the sever is live or not
app.listen(PORT,()=>{
    console.log("Server is running on Port Number :4000");
}
)