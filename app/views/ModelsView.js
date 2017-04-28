import ModelView from './ModelView'

const ModelsView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: ModelView,
  
  initialize: function (options) {
    this.page = options.page
  },
  
  onRender: function () {
    const pageNumber = this.page
    
    this.collection.fetch({
      success: function (data) {
        console.log('Successfully fetched data from page number' + pageNumber + '...')
      }
    })
  }
})

export default ModelsView