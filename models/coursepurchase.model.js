const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { CourseModelName } = require("./course.model");
const { DiscountModelName } = require("./discount.model");
const { EnrollTypeModelName } = require("./enrolltype.model");
const { PaymentMethodModelName } = require("./paymentmethod.model");
const { StatusModelName } = require("./status.model");
const { UserModelName } = require("./user.model");

const model_name = "course_purchase";

const schema = new mongoose.Schema(
  {
    discount_percentage: { type: Number, default: 0 },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
    sub_total: { type: Number, required: true },
    is_approved: { type: Boolean, default: false },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: UserModelName, required: true },
    payment_method_id: { type: mongoose.Schema.Types.ObjectId, ref: PaymentMethodModelName, default: null },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: CourseModelName, required: true },
    discount_id: { type: mongoose.Schema.Types.ObjectId, ref: DiscountModelName, default: null },
    status: { type: mongoose.Schema.Types.ObjectId, ref: StatusModelName, required: true },
    enroll_type_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: EnrollTypeModelName },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const CoursePurchaseModel = mongoose.model(model_name, schema, model_name);

module.exports = CoursePurchaseModel;
module.exports.CoursePurchaseModelName = model_name;
