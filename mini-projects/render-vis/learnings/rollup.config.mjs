import resolve from "@rollup/plugin-node-resolve";
import css from "@modular-css/rollup";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/exports.js",
    output: {
      file: "out/componentbundle.js",
      format: "iife",
      name: "$VC",
      sourcemap: true,
    },
  },
];
