// const { exec, spawn } = require("node:child_process");

const shell = require('shelljs')

const projects = [
  { name: "react-app-main", path: "packages/react-app-main" },
  { name: "react-app-sub1", path: "packages/react-app-sub1" },
  { name: "react-app-sub2", path: "packages/react-app-sub2" },
];

projects.forEach(project => {
  shell.exec(`pnpm -C ${project.path} start`, { async: true })
})
