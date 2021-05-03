const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    parent_id: {
      type: Schema.Types.ObjectId,
      ref: "parent",
      required: true,
    },
    platform: {
      type: String,
      enum: ["ios", "android", "unknow"],
      default: "unknow",
    },
    IMEI_UUID: {
      type: String,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "firebase_token";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.FIREBASE_TOKEN_MODEL_NAME = model_name;
