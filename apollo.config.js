module.exports = {
  client: {
    service: {
      name: "se-api",
      url: "http://localhost:4000/graphql",
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
};
