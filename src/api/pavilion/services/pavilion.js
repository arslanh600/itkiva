'use strict';

/**
 * pavilion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pavilion.pavilion');
