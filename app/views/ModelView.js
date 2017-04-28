const ModelView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  
  template: require('../templates/model-view-template.html'),
  
  className: 'table-row',
  
  serializeData: function () {
    return {
      'name': this.model.get('name'),
      'attribute': this.model.get('attribute')
    }
  }
})

export default ModelView