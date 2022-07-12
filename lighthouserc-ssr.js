module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run serve:ssr",
      url: ["http://localhost:4000"],
      numberOfRuns: 3,
      // chromePath: "/bin/google-chrome",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.60 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
