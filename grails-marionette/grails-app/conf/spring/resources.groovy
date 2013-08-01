import grails.rest.render.json.*
import nl.webexpress.Page

beans = {
    // pageRenderer(JsonRenderer, Page) {
    //     includes = ['id', 'title', 'pageorder']
    //     excludes = []
    // }
    pageRenderer(nl.webexpress.PageJsonRenderer)
}
