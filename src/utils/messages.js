'use strict';

import chalk from 'chalk';
import fs from 'fs';

const checkIfConfigFileExists = () => {
  if (!fs.existsSync('./mevn.json')) {
    console.log(
      chalk.cyan.bold(`\n\n Make sure that you're within a valid MEVN project
      \n${chalk.red.bold(' Error:')} No mevn.json file found
    `),
    );
    process.exit(1);
  }
};

const templateIsGraphQL = () => {
  let msg = `GraphQL boilerplate doesn't include ${chalk.yellow.bold(
    `model, route and controller`,
  )} directories!`;
  console.log(
    chalk.red.bold(
      `\n Warning:- ${chalk.cyan.bold(`${msg}
    `)}`,
    ),
  );
  process.exit(1);
};

const dependencyNotInstalled = dependency => {
  console.log(
    chalk.red.bold(`Warning:- ${chalk.cyan.bold(
      `${dependency} is required to be installed`,
    )}
    `),
  );
  process.exit(1);
};

const showInstallationInfo = (depCandidate, spinner, url) => {
  const msg = `You need to download ${depCandidate} from the official downloads page: ${url}`;
  typeof spinner !== 'undefined'
    ? spinner.info(msg)
    : console.log(chalk.cyan.bold(msg));
  process.exit(1);
};

const invalidProjectName = projectName => {
  console.log(
    chalk.red.bold(
      ` Error: Could not create a project called ${chalk.red(
        `"${chalk.cyan.bold(projectName)}"`,
      )} because of npm naming restrictions:`,
    ),
  );
  process.exit(1);
};

const directoryExistsInPath = projectName => {
  console.log(
    chalk.red.bold(
      `\n Error: Directory ${chalk.cyan.bold(
        projectName,
      )} already exists in path!`,
    ),
  );
  process.exit(1);
};

const hasStrayArgs = () => {
  console.log(
    chalk.red.bold(
      '\n Error: Kindly provide only one argument as the directory name!!',
    ),
  );
  process.exit(1);
};

module.exports = {
  checkIfConfigFileExists,
  templateIsGraphQL,
  dependencyNotInstalled,
  showInstallationInfo,
  invalidProjectName,
  directoryExistsInPath,
  hasStrayArgs,
};
