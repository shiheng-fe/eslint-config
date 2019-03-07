const assert = require('assert');
const eslint = require('eslint');
const path = require('path');

const CLIEngine = eslint.CLIEngine;
const cli = new CLIEngine({
  ignore: false,
});

const ruleList = [
  {
    root: 'test/eslint-config-javascript',
    rulePrefix: '',
    ignore: ['no-dupe-args'],
  },
];

ruleList.forEach(rule => {
  const { root, rulePrefix, fileExtension = ['js'], ignore = [] } = rule;

  const goodReport = cli.executeOnFiles(
    fileExtension.map(extension => `${root}/**/*/good.${extension}`)
  );
  goodReport.results.forEach(goodReportForOneFile => {
    const { errorCount, filePath } = goodReportForOneFile;
    assert.equal(errorCount, 0, `${filePath} should have no error`);
  });

  const badReport = cli.executeOnFiles(
    fileExtension.map(extension => `${root}/**/*/bad.${extension}`)
  );
  badReport.results.forEach(badReportForOneFile => {
    const { filePath, messages } = badReportForOneFile;

    const ruleName = path
      .dirname(filePath)
      .split(path.sep)
      .pop();

    const errorCount = messages.filter(
      o => o.ruleId === `${rulePrefix}${ruleName}`
    ).length;

    const expectErrorCount = require(filePath);

    if (ignore.includes(ruleName) && errorCount === expectErrorCount) {
      return;
    }

    assert(
      errorCount === expectErrorCount,
      `${filePath} should have ${expectErrorCount} error of rule ${ruleName}`
    );
  });

  console.log(`all test pass in ${root}`);
});
