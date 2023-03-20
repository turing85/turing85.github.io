'use strict'

module.exports = (name, { data: { root: { contentCatalog } } }) => {
    const filtered = []
    for (const component of contentCatalog.getComponents()) {
      if (component.name !== name) {
        filtered.push(component)
      }
    }
    return filtered;
  }