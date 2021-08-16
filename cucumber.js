let common = [
    "--require-module ts-node/register",
    "--require ./src/steps/*.ts",
    "--format cucumber-console-formatter",
    "--publish-quiet",
    "--tags 'not @ignore'",
].join(" ");

module.exports = {
    default: common,
};
