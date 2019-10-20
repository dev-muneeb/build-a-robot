module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://build-a-robot-server.herokuapp.com/',
        changeOrgin: true,
      },
    },
  },
};
