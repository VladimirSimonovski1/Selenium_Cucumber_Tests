let common = [
    "--require-module ts-node/register",
    "--require ./src/steps/*.ts",
    "--format json:report/result.json",
    "--format cucumber-console-formatter",
    "--tags 'not @ignore'",
].join(" ");

module.exports = {
    default: common,
};
