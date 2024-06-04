module.exports = {
    apps: [
        {
            name: 'CARFINN_SSR',
            namespace: 'FRONT',
            script: 'npm',
            args: 'run build:ssr',
            autorestart: true,
            max_memory_restart: '1G',
        },
    ],
};