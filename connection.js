const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://jeenarosejohn924:JEENAmongo@cluster0.z0ru6lm.mongodb.net/projectDB?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected')
})