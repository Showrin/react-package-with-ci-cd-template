import sass from "rollup-plugin-sass";
import resolveNodeModules from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

export default {
  input: "src/index.jsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    sass({ insert: true }),
    resolveNodeModules(),
    babel({
      babelrc: true,
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
  ],
  external: ["react", "react-dom", "prop-types", "@babel/runtime"],
};
