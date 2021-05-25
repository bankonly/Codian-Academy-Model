const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");

const Schema = mongoose.Schema;

const schema = new Schema(
	{
		student_id: {
			type: Schema.Types.ObjectId,
			ref: STUDENT_MODEL_NAME,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		is_paid: {
			type: Boolean,
			default: false,
		},
        amount: {
			type: Number,
			required: true,
		},
		pay_date: {
			type: Date,
			required: true,
		},
        branch_id: {
			type: Schema.Types.ObjectId,
			ref: BRANCH_MODEL_NAME,
			required: true,
		},
        // Add who create this fee
        teacher_id: {
			type: Schema.Types.ObjectId,
			ref: TEACHER_MODEL_NAME,
			required: true,
		},
        parent_id: {
			type: Schema.Types.ObjectId,
			ref: PARENT_MODEL_NAME,
			required: true,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "fee";
const FeeModel = mongoose.model(model_name, schema, model_name);
module.exports = FeeModel
module.exports.FEE_MODEL_NAME = model_name;
