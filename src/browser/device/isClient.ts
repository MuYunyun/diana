/**
 * judge if in client
 */
const isClient = () => !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export = isClient