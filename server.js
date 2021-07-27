'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const port = process.env.port;

const {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemController
} = require('./controllers/coffee.controller');
const { default: axios } = require('axios');

mongoose.connect(`mongodb://127.0.0.1:27017/finalexam`,
    { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('hello from backend')
    
});


let url = 'https://coffeepedias.herokuapp.com/coffee-list/'

app.get('/fav-list', (req, res) => {
    const coffeeData = async () => {

        let id = req.query.id;
        let title = req.query.title;
        let description = req.query.description;
        let ingredients = req.query.ingredients;
        let image_url = req.query.image_url;

        try {
            return axiosResponse = await axios.get(url);

        } catch (error) {
            console.error(error)
        }
    }
    // let axiosResponse= await axios.get(url)
    getFavoriteCoffee.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection('orders').aggregate([
            {
                $lookup:
                {
                    title: 'title',
                    id: 'id',
                    description: 'description',
                    ingredients: 'ingredients',
                    image_url: 'image_url'
                }
            }
        ]).toArray(function (err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            db.close();
        });
    });

    res.json(coffeeData)
});

app.get('/retreive', (req, res) => {
    res.send(
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.collection("customers").find({}).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
        }));

})


app.post('/create', (
    createItemController.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    })
));

app.put('/update/:id', updateItemController(

    updateItemController.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        let myquery = { id: ' /update/:id ' };
        let newvalues = { $set: { title: "" } };
        dbo.collection("customers").updateMany(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log(res.result.nModified + " updated");
            db.close();
        });
    }))
  );
app.delete('/delete/:id', deleteItemController(

    deleteItemController.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myquery = { id: 'id' };
        dbo.collection("customers").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 is deleted");
            db.close();
        });
    }))
);


app.listen(port, () => {
    console.log('listening to port 8000');
});