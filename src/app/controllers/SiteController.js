const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController{
    // [GET]/ 
    index(req, res, next ){
    Course.find({})
        .then(courses => {
            // courses = courses.map(course => course.toObject())
            res.render('course', {
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
        // .catch(error => next(error));
    }
    //[GET] /search
    show(req, res){
        res.render('search');
    }

    homepage(req, res){
        res.render('homepage');
    }
}



module.exports = new SiteController;