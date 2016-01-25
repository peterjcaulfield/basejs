module.exports = {
  pm2_start: {
    cmd: './node_modules/pm2/bin/pm2 start server/server.json'
  },
  pm2_stop: {
    cmd: './node_modules/pm2/bin/pm2 flush && ./node_modules/pm2/bin/pm2 delete all'
  }
};
