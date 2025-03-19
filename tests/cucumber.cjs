module.exports = {
    default: {
        require: [
            "ts-node/register",         // Transpile TS files on the fly (with type-checking)
            "./support/hooks.ts",       // Load hooks
            "./steps/**/*.ts"           // Load step definitions recursively
        ],
        paths: ["./features/*.feature"],  // Feature files location
        format: ["progress"],
        worldParameters: {}
    }
};
