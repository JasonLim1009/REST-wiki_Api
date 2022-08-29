//jshint esversion:6
// 365
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {userNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// //TODO

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 366
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// app.get('/articles', function(req, res){
//     Article.find(function(err, foundArticles){
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
        
//     });
// });

// app.post('/articles', function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function(err){
//         if (!err){
//             res.send('successfully added a new article.');
//         } else {
//             res.send(err);
//         }
//     });
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 368
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// app.get('/articles', function(req, res){
//     Article.find(function(err, foundArticles){
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
        
//     });
// });

// app.post('/articles', function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function(err){
//         if (!err){
//             res.send('successfully added a new article.');
//         } else {
//             res.send(err);
//         }
//     });
// });

// app.delete('/articles', function(req, res){
//     Article.deleteMany(function(err){
//         if (!err){
//             res.send('successfully deleted all articles.')
//         } else {
//             res.send(err);
//         }
//     });
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 369
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// app.route('/articles')

// .get(function(req, res){
//     Article.find(function(err, foundArticles){
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
        
//     });
// })

// .post(function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function(err){
//         if (!err){
//             res.send('successfully added a new article.');
//         } else {
//             res.send(err);
//         }
//     });
// })

// .delete(function(req, res){
//     Article.deleteMany(function(err){
//         if (!err){
//             res.send('successfully deleted all articles.')
//         } else {
//             res.send(err);
//         }
//     });
// });



// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 370
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// ////////////////////////////////////Requests Targetting all Articles/////////////////////

// app.route('/articles')

// .get(function(req, res){
//     Article.find(function(err, foundArticles){
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
        
//     });
// })

// .post(function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function(err){
//         if (!err){
//             res.send('successfully added a new article.');
//         } else {
//             res.send(err);
//         }
//     });
// })

// .delete(function(req, res){
//     Article.deleteMany(function(err){
//         if (!err){
//             res.send('successfully deleted all articles.')
//         } else {
//             res.send(err);
//         }
//     });
// });

// ////////////////////////////////////Requests Targetting A Specific Articles/////////////////////

// app.route('/articles/:articleTitle')

// .get(function(req, res){

//     Article.findOne({title: req.params.articleTitle}, function(err, foundArticles){
//         if (foundArticles) {
//             res.send(foundArticles);
//         } else {
//             res.send('no articles matching that title was found.');
//         }
//     });
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 371
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// ////////////////////////////////////Requests Targetting all Articles/////////////////////

// app.route('/articles')

// .get(function(req, res){
//     Article.find(function(err, foundArticles){
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
        
//     });
// })

// .post(function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function(err){
//         if (!err){
//             res.send('successfully added a new article.');
//         } else {
//             res.send(err);
//         }
//     });
// })

// .delete(function(req, res){
//     Article.deleteMany(function(err){
//         if (!err){
//             res.send('successfully deleted all articles.')
//         } else {
//             res.send(err);
//         }
//     });
// });

// ////////////////////////////////////Requests Targetting A Specific Articles/////////////////////

// app.route('/articles/:articleTitle')

// .get(function(req, res){

//     Article.findOne({title: req.params.articleTitle}, function(err, foundArticles){
//         if (foundArticles) {
//             res.send(foundArticles);
//         } else {
//             res.send('no articles matching that title was found.');
//         }
//     });
// })

// .put(function(req, res){
//     Article.update(
//         {title: req.params.articleTitle},
//         {title: req.body.title, content: req.body.content},
//         {overwrite: true},
//         function(err){
//             if(!err){
//                 res.send('successfully updated article.');
//             }
//         }
//     );
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 372
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

// const articleSchema = {
//     title: String,
//     content: String
// };

// const Article = mongoose.model('Article', articleSchema);

// ////////////////////////////////////Requests Targetting all Articles/////////////////////

// app.route('/articles')

// .get(function(req, res){
//     Article.find(function(err, foundArticles){
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
        
//     });
// })

// .post(function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function(err){
//         if (!err){
//             res.send('successfully added a new article.');
//         } else {
//             res.send(err);
//         }
//     });
// })

// .delete(function(req, res){
//     Article.deleteMany(function(err){
//         if (!err){
//             res.send('successfully deleted all articles.')
//         } else {
//             res.send(err);
//         }
//     });
// });

// ////////////////////////////////////Requests Targetting A Specific Articles/////////////////////

// app.route('/articles/:articleTitle')

// .get(function(req, res){

//     Article.findOne({title: req.params.articleTitle}, function(err, foundArticles){
//         if (foundArticles) {
//             res.send(foundArticles);
//         } else {
//             res.send('no articles matching that title was found.');
//         }
//     });
// })

// .put(function(req, res){
//     Article.update(
//         {title: req.params.articleTitle},
//         {title: req.body.title, content: req.body.content},
//         {overwrite: true},
//         function(err){
//             if(!err){
//                 res.send('successfully updated article.');
//             }
//         }
//     );
// })

// .patch(function(req, res){
//     Article.update(
//         {title: req.params.articleTitle},
//         {$set: req.body},
//         function(err){
//             if(!err){
//                 res.send('successfully updated article.')
//             } else {
//                 res.send(err);
//             }
//         }
//     );
// });

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

// nodemon app.js



// 373
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model('Article', articleSchema);

////////////////////////////////////Requests Targetting all Articles/////////////////////

app.route('/articles')

.get(function(req, res){
    Article.find(function(err, foundArticles){
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
        
    });
})

.post(function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if (!err){
            res.send('successfully added a new article.');
        } else {
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Article.deleteMany(function(err){
        if (!err){
            res.send('successfully deleted all articles.')
        } else {
            res.send(err);
        }
    });
});

////////////////////////////////////Requests Targetting A Specific Articles/////////////////////

app.route('/articles/:articleTitle')

.get(function(req, res){

    Article.findOne({title: req.params.articleTitle}, function(err, foundArticles){
        if (foundArticles) {
            res.send(foundArticles);
        } else {
            res.send('no articles matching that title was found.');
        }
    });
})

.put(function(req, res){
    Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send('successfully updated article.');
            }
        }
    );
})

.patch(function(req, res){
    Article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
            if(!err){
                res.send('successfully updated article.')
            } else {
                res.send(err);
            }
        }
    );
})

.delete(function(req, res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
            if (!err){
                res.send('successfully deleted the corresponding article.');
            } else {
                res.send(err);
            }
        }
    );
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

// nodemon app.js