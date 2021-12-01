import { RIDDLE_ONE_MODULE_NAME } from './settings';

export const preloadTemplates = async function () {
  const templatePaths = [
    // Add paths to "modules/foundryvtt-riddle-one/templates"
    `modules/${RIDDLE_ONE_MODULE_NAME}/templates/riddle-one.hbs`,
  ];
  return loadTemplates(templatePaths);
};
