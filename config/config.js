const env = process.env.NODE_ENV || "development";

var config = {
    development: {
        env: env,
        port: process.env.PORT || 3000,
    },
};

module.exports = config[env];