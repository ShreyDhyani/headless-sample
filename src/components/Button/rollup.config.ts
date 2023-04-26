// import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";
// import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
      },
    ],
    external: ["react", "react-dom"],
    // plugins: [
    //   resolve(),
    //   commonjs(),
    //   typescript({
    //     useTsconfigDeclarationDir: true,
    //   }),
    // ],
  },
];
