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
  events: {
    'mouseover .table-header': 'mouseoverFunc',
    'mouseout .table-header': 'mouseoutFunc',
    'mouseover .table-row': 'rowMouseOver',
  },    
  
  initialize: function (options) {
  },
  
  onRender: function () {
    this.showChildView('body', new ModelsView({ collection: this.collection }))
  },
  
  serializeData: function () {
    return { 
      'page': this.page,
    }
  },
  mouseoverFunc: function(event){
    $(event.currentTarget).css({"background-color":"lightgrey","cursor":"pointer"});
  },
  mouseoutFunc: function(event){
    $(event.currentTarget).css("background-color", "rgb(231, 231, 230)");
  },
  rowMouseOver: function(event){
    $(event.currentTarget).css({"cursor":"pointer"});
  },    
})

export default TableView