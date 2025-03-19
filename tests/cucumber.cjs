module.exports = {
    default: {
        require: [
            "ts-node/register",        // For CommonJS transpilation
            "./support/hooks.ts",      // Load hooks
            "./steps/**/*.ts"          // Load step definitions recursively
        ],
        paths: ["./features/*.feature"], // Feature files
        format: ["progress"],
        worldParameters: {}
    }
};
