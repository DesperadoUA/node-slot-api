const slugify = require('slugify')
class Helper {
    static transliterateUrl(str) {
        return slugify(str, {
            replacement: '-',  
            remove: /[*+~.()'"!:@]/g, 
            lower: true,      
            strict: false,     
            trim: true   
        })
    }
 }
 module.exports = Helper