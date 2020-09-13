const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const todoSchema = new Schema({
	bucketId: {
		type: Schema.Types.ObjectId,
		ref:'buckets'
	},

	name: {
		type:String,
		required:true
	},

	status: {
    type: Number, // 1 - active 2 - inactive 3 - delete
    enum: [1, 2, 3],
    default: 1
  },
}, {
	timestamps:true
}
);

const todo = mongoose.model('todos', todoSchema);

module.exports = todo;