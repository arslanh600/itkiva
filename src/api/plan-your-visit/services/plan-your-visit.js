'use strict';

/**
 * plan-your-visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::plan-your-visit.plan-your-visit');
