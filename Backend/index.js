let express = require("express");
let cors = require("cors");
let multer = require("multer");
let path = require("path");
let fs = require("fs");
let {MongoClient, ObjectId} = require("mongodb");

const url = "mongodb://0.0.0.0:27017";

let app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.json());

let storage = multer.diskStorage(
    {
        destination : (req,file,cb) => cb(null,"uploads/"),
        filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
    }
);
let upload = multer({storage});

app.post("/upload",upload.single("file"),(req,res)=>
{
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("Fileuploads");
    let collec = db.collection("Files");
    let obj = {
        file_name:req.file.filename,
        file_url:`http://localhost:3000/uploads/${req.file.filename}`,
        username:req.body.username,
        caption:req.body.caption,
        upload_time:new Date()
    }
    collec.insertOne(obj)
    .then((result)=>res.send(result))
    .catch((error)=>res.send(error));
});

app.get("/files",(req,res)=>{
    let username = req.query.username;
    let query = username? {username} : {} ; 
    let client = new MongoClient(url);
    client.connect();

    let db = client.db("Fileuploads");
    let collec = db.collection("Files");

    collec.find(query).toArray()
    .then((result)=>res.json(result))
    .catch((error)=>alert(error));
});

app.delete("/delete/:id",(req,res)=>{
    let client = new MongoClient(url);
    client.connect();

    let db = client.db("Fileuploads");
    let collec = db.collection("Files");
    
    let { id } = req.params;
    let _id = new ObjectId(id);
    collec.findOne({_id})
    .then(
        (obj)=>{
            let filePath = path.join(__dirname, 'uploads',obj.file_name);
            fs.promises.unlink(filePath);
            return collec.deleteOne({_id})
        }
    ) 
    .then((result)=>res.json(result))
    .catch((error)=>res.send(error));
});

app.listen(3000,()=>console.log("Express is live"));

