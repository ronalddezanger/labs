package nl.webexpress

import grails.rest.*
import org.bson.types.ObjectId

@Resource(uri='/pages', formats=['json', 'xml'])
class Page {
    ObjectId id
    String title
    Integer pageorder

    static constraints = {
    }
}
