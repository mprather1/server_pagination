import Marionette from 'marionette'
import Models from './collections/Models'
import TableView from './views/TableView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },
  
  page: function (options) {
    const app = this.app
    const models = new Models([], { page: options })
    
    models.fetch({
      success: function (data) {
        const { currentPage } = data.pageData
        
        console.log('Successfully fetched data from page number ' + currentPage + '...')
        
        app.view.showChildView('main', new TableView({ collection: models, pageData: data.pageData }))
      }
    })
  }  
})

export default Controller
