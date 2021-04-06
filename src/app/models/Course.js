const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255, required: true},
    description: {type: String, maxLength: 600},
    videoID: {type: String, maxLength: 255},
    level: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    slug: { type: String, slug: "name", unique: true },
  },  {
    timestamps: true,
  });

module.exports = mongoose.model('Course', Course);
