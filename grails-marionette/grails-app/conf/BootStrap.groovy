import nl.webexpress.Page
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        JSON.registerObjectMarshaller(Page) { Page page ->
            return [
                id: page.id.toString(),
                title: page.title,
                order: page.order
            ]
        }

//        new Page(title: "Home", order: 1).save()
//        new Page(title: "About", order: 2).save()
//        new Page(title: "Portfolio", order: 3).save()
//        new Page(title: "Pricing", order: 4).save()
//        new Page(title: "Contact", order: 5).save()
    }
    def destroy = {
    }
}
