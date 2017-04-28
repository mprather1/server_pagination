import ModelsView from './ModelsView'

const TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require('../templates/table-view-template.html'),
  className: 'panel panel-primary',
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    },
    footer: {
      el: '.panel-footer'
    }
  },
  
  initialize: function (options) {
    this.page = options.page
  },
  
  onRender: function () {
    this.showChildView('body', new ModelsView({ collection: this.collection, page: this.page }))
  },
  
  serializeData: function () {
    return { 
      'page': this.page
    }
  }
})

export default TableView