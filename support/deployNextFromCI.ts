import pify from "pify";

/*
 * This script is meant to be run by a CI environment during the deploy phase.
 *
 * Based on https://github.com/conventional-changelog/standard-version/issues/192#issuecomment-610494804
 */
(async function runner(): Promise<void> {
  const childProcess = await import("child_process");
  const exec = pify(childProcess.exec);

  async function deployNextFromCI(): Promise<void> {
    console.log("Deploying @next 🚧");

    console.log(" - adding user details...");

    await exec(`git config --global user.email "github-actions[bot]@users.noreply.github.com"`);
    await exec(`git config --global user.name "github-actions[bot]"`);

    // the setup-node gh action handles the token
    // https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages#publishing-packages-to-the-npm-registry

    console.log(" - prepping and building package...");
    await exec(`npm run util:prep-next`);

    const changesCommitted = (await exec(`git rev-parse HEAD`)) !== (await exec(`git rev-parse origin/master`));
    if (!changesCommitted) {
      console.log("an error occurred committing changes");
      process.exitCode = 1;
    }

    await exec(`git log --pretty=format:'%h : %s' --graph`);

    // github token provided by the checkout action
    // https://github.com/actions/checkout#usage
    console.log(" - pushing tags...");
    await exec(`git push --atomic --follow-tags origin master`);

    const changesPushed = (await exec(`git rev-parse HEAD`)) === (await exec(`git rev-parse origin/master`));
    if (!changesPushed) {
      console.log("an error occurred pushing changes");
      process.exitCode = 1;
    }

    console.log(" - publishing @next...");
    await exec(`npm run util:publish-next`);

    console.log("@next deployed! 🚀");
  }

  try {
    await deployNextFromCI();
  } catch (error) {
    console.log(
      `An error occurred during deployment ❌:
${error}`
    );
  }
})();
