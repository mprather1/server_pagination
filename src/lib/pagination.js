export default function paginate (req, data, pageSize) {
  let total, 
    pageCount, 
    currentPage = 1, 
    modelsArrays = [], 
    modelsList = [],
    object = {}
    
  total = data.length
  
  while (data.length > 0) {
    modelsArrays.push(data.splice(0, pageSize))
  }

  if (typeof req.query.page !== 'undefined') {
    currentPage = + req.query.page
  }
  modelsList = modelsArrays[+currentPage - 1]
  
  pageCount = total / pageSize

  if (parseInt(pageCount) - pageCount > 0) {
    pageCount = parseInt(pageCount)
  } else {
    pageCount = parseInt(pageCount + 1)
  }
  
  object = {
    models: modelsList,
    pageSize: pageSize,
    total: total,
    pageCount: pageCount,
    currentPage: currentPage      
  }
  
  return object
}