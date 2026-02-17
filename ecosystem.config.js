module.exports = {
  apps: [
    {
      name: "cryftlabs",
      script: "server.js",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "150M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
