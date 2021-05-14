const mongoose = require("mongoose");
const { GALLERY_MODEL_NAME } = require("./gallery_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		gallery_id: {
			type: Schema.Types.ObjectId,
			ref: GALLERY_MODEL_NAME,
			required: true,
		},
		discuss_img: { type: String, required: true },
		replyier_id: {
			type: Schema.Types.ObjectId,
			refPath: "on_model",
			required: true,
		},
		on_model: {
			type: String,
			enum: [PARENT_MODEL_NAME, TEACHER_MODEL_NAME],
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: [{ type: String, required: false }],
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "reply_gallery";
const ReplyGalleryModel = mongoose.model(model_name, schema, model_name);
module.exports = ReplyGalleryModel;
module.exports.REPLY_GALLERY_MODEL_NAME = model_name;
