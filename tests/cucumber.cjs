// cucumber.cjs
module.exports = {
    default: {
        require: [
            "ts-node/register",          // Transpile TS files on the fly (CommonJS)
            "./support/hooks.ts",        // Automatically load hooks (adjust extension if needed)
            "./steps/**/*.ts"            // Automatically load step definitions (recursive)
        ],
        paths: ["./features/*.feature"],  // Correct path for feature files
        format: ["progress"],
        worldParameters: {}
    }
};
