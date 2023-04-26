'use strict';

/**
 * twitter-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::twitter-feed.twitter-feed');
