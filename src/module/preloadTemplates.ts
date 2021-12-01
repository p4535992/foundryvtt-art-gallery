import { ART_GALLERY_MODULE_NAME } from './settings';

export const preloadTemplates = async function () {
  const templatePaths = [
    // Add paths to "modules/foundryvtt-art-gallery/templates"
    `modules/${ART_GALLERY_MODULE_NAME}/templates/manager.hbs`,
  ];
  return loadTemplates(templatePaths);
};
