import type { Core } from '@strapi/strapi';

const PUBLIC_FIND_ACTIONS = [
  'api::landing-page.landing-page.find',
  'api::collaborator-page.collaborator-page.find',
  'api::project.project.find',
  'api::project.project.findOne',
  'api::collaborator.collaborator.find',
  'api::collaborator.collaborator.findOne',
  'api::study.study.find',
  'api::study.study.findOne',
  'api::event.event.find',
  'api::event.event.findOne',
  'api::tag.tag.find',
  'api::tag.tag.findOne',
  'plugin::upload.file.find',
  'plugin::upload.file.findOne',
];

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const publicRole = await strapi.db
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' }, populate: ['permissions'] });

    if (!publicRole) {
      return;
    }

    const existing = new Set(
      (publicRole.permissions ?? []).map((permission: { action: string }) => permission.action)
    );

    await Promise.all(
      PUBLIC_FIND_ACTIONS.filter((action) => !existing.has(action)).map((action) =>
        strapi.db.query('plugin::users-permissions.permission').create({
          data: { action, role: publicRole.id },
        })
      )
    );
  },
};
