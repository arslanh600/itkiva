'use strict';

/**
 * how-to-register service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::how-to-register.how-to-register');
