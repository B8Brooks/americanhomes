// American residential architectural styles.
// Each entry: id, name, period, region, summary, keyFeatures, elements, tags, svg.
// `elements` are the prompts used by the Element Quiz; the strongest, most
// diagnostic features should be at the top.

window.STYLES = [];

// Helper: look up a style by id.
window.STYLE_BY_ID = function (id) {
  return window.STYLES.find(function (s) { return s.id === id; });
};
