package nl.webexpress

import org.bson.types.ObjectId

class Page {
	ObjectId id
	String title
	Integer itemorder

    static constraints = {
    }

    

	//convert Mongo ObjectId to 12-byte hex BSON
	// def out() {
	// 	return [
	// 		id:    id.toString(),
	// 		title: title,
	// 		itemorder: itemorder
	// 	]
	// }
}
