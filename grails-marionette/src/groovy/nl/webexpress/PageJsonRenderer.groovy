package nl.webexpress

import nl.webexpress.Page
import grails.rest.render.*
import org.codehaus.groovy.grails.web.mime.MimeType

class PageJsonRenderer extends AbstractRenderer<Page> {
    PageJsonRenderer() {
        super(Page, [MimeType.JSON,MimeType.TEXT_JSON] as MimeType[])
    }

    void render(Page object, RenderContext context) {
        context.contentType = MimeType.JSON.name

        def builder = new groovy.json.JsonBuilder()
        builder.page(id: object.id.toString(), title: object.title, order: object.pageorder)
    }
}