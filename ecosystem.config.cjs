const date = new Date().toISOString().split('T')[0];

module.exports = {
    apps: [
        {
            name: "client_communication",
            cwd: "./client_communication",
            script: "bun",
            args: ["run", "start"],
            env: {
                NODE_ENV: "production",
                APP_VERSION: "1.0.0",
                START_DATE: date
            },
            instances: 1,
            exec_mode: "fork",
            max_memory_restart: "1G",
            env_development: {
                NODE_ENV: "development"
            }
        }
    ]
};

