
'use strict'

//config
var pool = require('./../../config/connection');
var target_author = require('./../../config/config').target;

module.exports = async function (op, timestamp) {
	
	if (op[1]['parent_author'] === "") {  // check if its a post - not a comment
                
		if (op[1]["author"] == target_author) { // checks for target author
		
			try {
					
					var sql = "CALL new_post(?,?,?,?,?,?,?)";
					
					var details =  [ op[1]["author"], op[1]["permlink"], op[1]["parent_permlink"], op[1]["title"], op[1]["body"], ("/@" + op[1]["author"] + "/" + op[1]["permlink"]), timestamp ];
					
					await pool.query(sql, details);
					
				}
				catch(err) {
					//console.log(err.message);
			}
	
		}

    }
	
};