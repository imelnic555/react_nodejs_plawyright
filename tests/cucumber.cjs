module.exports = {
    default: {
        require: [
            "ts-node/esm",           // Transpile TS files on the fly
            "./support/hooks.ts",     // Automatically load hooks
            "./steps/*.ts"            // Automatically load step definitions
        ],
        paths: ["./features/*.feature"],  // Correct path for feature files
        format: ["progress"],
        worldParameters: {}
    }
};
