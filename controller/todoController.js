var bodyparser =  require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended:false});
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://rankyakab:1jesus@ds131903.mlab.com:31903/another_todo')

//create a schema- this is like a blueprint of our schema (database structure);
var todoSchema = new mongoose.Schema({
  item: String
})

// create a model
var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item:"get milk"},{item:"video tutorial on javascript"}, {item:"watch movie"}];
module.exports = function(app){
  app.get('/todo', function(request, response){
    //get data from mongodb and pass it to the view
    Todo.find({},(err,data)=>{
      if(err) throw err;
      response.render('todo',{todos:data});

  })

  });
  app.post('/todo',urlencodedParser, function(request, response){
    // need to get data from the view and add it to mongobd
    var newTodo = Todo(request.body).save(function(err,data){
      if(err) throw err;
      response.json(data);
    });

  });
  app.delete('/todo/:item', function(request, response){
    // delete requesteed item for mongodb
    Todo.find({item:request.params.item.replace(/\-/g,' ')}).remove(function(err,data){
        if(err)throw err;
        response.json(data);
    })

})
}
