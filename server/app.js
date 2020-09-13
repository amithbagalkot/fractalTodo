const http = require('http'),
	  fs = require('fs'),
	  express = require('express'),
	  app = express(),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  dotenv = require('dotenv'),
	  User = require('./user/user.js')

	  
	  mongoose.connect(
	  	DB_HOST,
	  	{useNewParser:false, useCreateIndex:true});

	  
	  mongoose.connection.on('error', (err)=>{
	  	console.log('mongodb errr', err);
	  	process.exit()
	  })

	app.use(router)
	app.listen(process.env.PORT, function (req, res){
		console.log(`%s App is running at ${Process.env.PORT}`);
    	console.log('Press CTRL-C to exit');
	})

	router.get('/todo', async (req, res)=>{

	let todo = await Todo.find({});
	if (todo) res.send({todo:todo});
	});

	router.Post('/create_todo', async (req, res)=>{

	let todo = new Todo({
		name: req.body.name,
		status:req.body.status
	});

	let newTodo = todo.save();
	if (newTodo) {res.send({status:200, message:'created successfully'})}
	});