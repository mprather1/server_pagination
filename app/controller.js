import Marionette from 'marionette'
import Models from './collections/Models'
import TableView from './views/TableView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },
  
  page: function (options) {
    const products = new Models([], {page: options })
    this.app.view.showChildView('main', new TableView({ collection: products, page: options }))    
  }  
})

export default Controller
