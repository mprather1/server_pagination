import Model from '../models/Model'

const Models = Backbone.Collection.extend({
  model: Model,
  
  initialize: function (model, options) {
    const {page} = options
    
    let pageNumber
    
    if (page) {
      pageNumber = page
    } else {
      pageNumber = 1
    }
    
    this.url = 'http://shintech.ninja:8000/api/models/?page=' + pageNumber
  },
  
  parse: function (response) {
    let updatedResponse = {}
    updatedResponse = _.merge(response.models, { pageData: response.pageData })
    this.pageData = response.pageData
    return updatedResponse
    }
})

export default Models