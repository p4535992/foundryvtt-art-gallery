import { i18n } from '../foundryvtt-art-gallery.js';
import ArtGalleryManager from './GalleryManager.js';
import { getGame } from './settings.js';

Hooks.on('getActorSheetHeaderButtons', onGetActorSheetHeaderButtons);
Hooks.on('getActorDirectoryEntryContext', onGetActorDirectoryEntryContext);

globalThis.ArtGalleryManager = ArtGalleryManager;

/**
 * Adds a new new entry to the contextmenu of the Actor Directory
 * @param {jQuery} html The HTML element
 * @param {Array} options The contextmenu entries
 */
function onGetActorDirectoryEntryContext(html, options) {
  const viewCharArtOption = options.find((o) => o.name === 'SIDEBAR.CharArt');
  const viewCharArtIndex = options.indexOf(viewCharArtOption);
  const galleryOption = {
    name: i18n('foundryvtt-art-gallery.ViewGallery'),
    icon: '<i class="fas fa-paint-brush"></i>',
    condition: viewCharArtOption.condition,
    callback: (li) => {
      const actor = getGame().actors?.get(li.data('entityId'));
      new ArtGalleryManager(actor).render(true);
    },
  };
  options.splice(viewCharArtIndex + 1, 0, galleryOption);
}

/**
 * Adds a new Actor sheet button to open the Art Gallery Manager
 * @param {Object} sheet The actor sheet
 * @param {Array} buttons The array of header buttons
 */
function onGetActorSheetHeaderButtons(sheet, buttons) {
  const actor = sheet.actor;
  const button = {
    label: i18n('foundryvtt-art-gallery.Gallery'),
    class: 'open-art-gallery',
    icon: 'fas fa-paint-brush',
    onclick: () => {
      new ArtGalleryManager(actor).render(true);
    },
  };
  buttons.unshift(button);
}
