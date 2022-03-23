class Pages {
    constructor(express, next) {
      this.express = express
      this.next = next
    }
  
    init() {
      this.initSpecialPages()
      this.initDefaults()
    }
  
    initSpecialPages() {
      this.express.get('/my_special_page/:special_value', (req, res) => {
        const intValue = parseInt(req.params.special_value)
        if(intValue) {
          return this.next.render(req, res, `/special_int`, req.query)
        } else {
          return this.next.render(req, res, `/special_string`, req.query)
        }
      })
    }
  
    initDefaults() {
      this.express.get('/', (req, res) => {
        return this.next.render(req, res, '/index', req.query)
      })

    }
  }
  
  module.exports = Pages