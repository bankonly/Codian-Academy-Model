const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { CourseModelName } = require("./course.model");
const { UserModelName } = require("./user.model");

const model_name = "discount";

const schema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        discount_percentage: { type: Number, required: true },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        deleted_at: { type: Date, default: null },
        course_id: [{ type: mongoose.Schema.Types.ObjectId, ref: CourseModelName, required: true }],
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: UserModelName, required: true },
    },
    DB_TIMESTAMP_CONFIG
);

const DiscountModel = mongoose.model(model_name, schema, model_name);

module.exports = DiscountModel;
module.exports.DiscountModelName = model_name;
