import { Config } from 'ownstak';
/**
 * This is the default config for your OwnStak project.
 * Use it to customize the OwnStak project behavior
 * and commit it to your project source code.
 * @see https://docs.ownstak.com/cli/configuration
 */
export default new Config()
  .setFramework("static")
  .setBuildCommand("npx vitepress build docs")
  .setDevCommand("npx vitepress dev docs")
  .setDefaultFile("404.html")
  .setDefaultStatus(404)
  .includeAsset("./docs/.vitepress/dist", "./")