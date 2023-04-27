module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337','http://localhost:4200','https://iktiva-api.onrender.com']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

];

// module.exports = {
//   settings: {
//     cors: {
//       enabled: true,
//       origin: ['http://localhost:4200'], // Replace with your Angular app's origin
//     },
//   },
// };
