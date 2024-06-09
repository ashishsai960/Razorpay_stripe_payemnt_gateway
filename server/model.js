const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize('job_portal', 'postgres', '7382252042', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5431, // or your specific port
  });
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
