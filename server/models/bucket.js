const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const BuckeSchema = new Schema({
	name: {
		type:String
	}
}, {
	timestamps:true
}
);

const bucket = mongoose.model('buckets', BucketSchema);

module.exports = bucket;