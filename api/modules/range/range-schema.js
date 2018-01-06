var mongoose = require('mongoose');

Schema = mongoose.Schema;

var rangeSchema = new Schema({
    id: String,
    min: Number,
    max: Number,
}); 

var rangesSchema =mongoose.model("Range", rangeSchema)
module.exports = rangesSchema;