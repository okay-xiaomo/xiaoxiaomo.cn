declare global {
  interface Window {
    pluginWebUpdateNotice_?: {
      checkUpdate: () => boolean;
    };
  }
}

export {}