module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd13b2e52f89c01d1f686e4160634f4c9'),
  },
});
