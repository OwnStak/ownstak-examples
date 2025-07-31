import { Config } from 'ownstak';
/**
 * This is the default config for your OwnStak project.
 * Use it to customize the OwnStak project behavior
 * and commit it to your project source code.
 * @see https://docs.ownstak.com/cli/configuration
 */
export default new Config()
  .setFramework("static")
  .setBuildCommand("npx docusaurus build")
  .setDevCommand("npx docusaurus start")
  .setDefaultFile("404.html")
  .setDefaultStatus(404)
  .includeAsset("./build", "./")