module.exports = {
    apps: [
        {
            name: 'MINI',
            namespace: 'FRONT',
            script: 'npm',
            args: 'run build:ssr',
            autorestart: true,
            max_memory_restart: '1G',
           // out_file: path.join(__dirname, './src/logs/pm2/') + moment().format('YYYY-MM-DD') + '.log'
        },
    ],
};
