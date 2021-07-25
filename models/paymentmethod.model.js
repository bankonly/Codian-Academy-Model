const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "payment_method";

const schema = new mongoose.Schema(
    {
        name_en: { type: String, required: true },
        name_la: { type: String, required: true },
        numeric: { type: String, required: true, unique: true },
        deleted_at: { type: Date, default: null },
    },
    DB_TIMESTAMP_CONFIG
);

const PaymentMethodModel = mongoose.model(model_name, schema, model_name);

module.exports = PaymentMethodModel;
module.exports.PaymentMethodModelName = model_name;
