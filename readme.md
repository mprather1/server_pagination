## Server Pagination

### Synopsis

Server side pagination example
### Installation

    ./install.sh
    
### Usage 

    import pagination from '../../lib/pagination'
    
    const pageSize = 10
    
    function getModels (req, res) {
      res.status(200)
        .json(pagination(req, data, pageSize)
    }
    