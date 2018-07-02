const SETTINGS = window['__VIX_SETTINGS__'] || {};

export class Helper {
  constructor() { }

  getSettings() {
    return SETTINGS;
  }
}
