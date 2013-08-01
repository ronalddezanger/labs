import nl.webexpress.Page
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        JSON.registerObjectMarshaller(Page) { Page page ->
            return [
                id: page.id.toString(),
                title: page.title,
                order: page.pageorder
            ]
        }

        new Page(title: "Home", pageorder: 1).save()
        new Page(title: "About", pageorder: 2).save()
        new Page(title: "Portfolio", pageorder: 3).save()
        new Page(title: "Pricing", pageorder: 4).save()
        new Page(title: "Contact", pageorder: 5).save()
    }
    def destroy = {
    }
}
