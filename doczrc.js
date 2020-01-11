import * as path from "path"
import pkg from "./package.json"

export default {
  title: "Show me the code",
  description: pkg.description,
  themeConfig: {
    initialColorMode: "dark",
    showPlaygroundEditor: true,
  },
  onCreateWebpackConfig: ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, "../src"), "node_modules"],
      },
    })
  },
}
