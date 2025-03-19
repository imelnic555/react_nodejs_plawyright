module.exports = {
    default: {
        require: [
            "ts-node/register/transpile-only",  // Skip type-checking for faster transpilation
            "./support/hooks.ts",
            "./steps/**/*.ts"
        ],
        paths: ["./features/*.feature"],
        format: ["progress"],
        worldParameters: {}
    }
};
