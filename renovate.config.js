const branchName = "auto-dep-update";

module.exports = {
  branchPrefix: `${branchName}/`,
  enabledManagers: ["github-actions", "npm", "nuget"],
  gitAuthor: "Renovate Bot <renovate@example.com>",
  logLevel: "info",
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: "github",
  schedule: ["after 2am and before 9pm"],
  regexManagers: [],
  repositories: ["ceisele-r/renovate-version-constraint-demo1"],
  rebaseWhen: "auto",
  prConcurrentLimit: 4,
  ignoreDeps: [],
};
