const mongoose = require("mongoose");
const { GALLERY_MODEL_NAME } = require("./gallery_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { REPLY_GALLERY_MODEL_NAME } = require("./reply_gallery_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		reply_gallery_id: {
			type: Schema.Types.ObjectId,
			ref: REPLY_GALLERY_MODEL_NAME,
			requried: true,
		},
		liker: {
			type: Schema.Types.ObjectId,
			refPath: "on_model",
			requried: true,
		},
		on_model: {
			type: String,
			enum: [PARENT_MODEL_NAME, TEACHER_MODEL_NAME],
			required: true,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "like_record_gallery";
const LikeGalleryModel = mongoose.model(model_name, schema, model_name);
module.exports = LikeGalleryModel;
module.exports.LIKE_GALLERY_MODEL_NAME = model_name;
