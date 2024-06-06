const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASS, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT,
}
);

const RazorpayWebhookData = sequelize.define('RazorpayWebhookData', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'razorpay_webhook_data',
    timestamps: false,
});

const StripeWebhookData = sequelize.define('StripeWebhookData', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentIntent: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'stripe_webhook_data',
    timestamps: false,
});

module.exports = {
    sequelize,
    RazorpayWebhookData,
    StripeWebhookData,
};
