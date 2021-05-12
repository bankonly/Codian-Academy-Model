const mongoose = require("mongoose");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { CLASSES_MODEL_NAME } = require("./class_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		teacher_id: {
			type: Schema.Types.ObjectId,
			ref: TEACHER_MODEL_NAME,
			required: true,
		},
		student_id: {
			type: Schema.Types.ObjectId,
			ref: STUDENT_MODEL_NAME,
			required: true,
		},
		class_id: {
			type: Schema.Types.ObjectId,
			ref: CLASSES_MODEL_NAME,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
			enum: ["individual", "class"],
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "saving";
const SavingModel = mongoose.model(model_name, schema, model_name);
module.exports = SavingModel;
module.exports.SAVING_MODEL_NAME = model_name;
