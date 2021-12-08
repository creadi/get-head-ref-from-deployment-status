const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token =
    core.getInput("github-token", { required: false }) ||
    process.env.GITHUB_TOKEN;

  const sha = core.getInput("sha", { required: true });

  const octokit = github.getOctokit(token);
  const context = github.context;
  const result = await octokit.rest.repos.listPullRequestsAssociatedWithCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: sha,
  });

  const pr = prs[0];

  core.setOutput("head_ref", pr.head.ref);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
