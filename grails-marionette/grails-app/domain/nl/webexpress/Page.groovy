package nl.webexpress

import grails.rest.*
import org.bson.types.ObjectId

class Page {
    ObjectId id
    String title
    Integer order

    static constraints = {
    }
}
