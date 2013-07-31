import nl.webexpress.Page

class BootStrap {

    def init = { servletContext ->
        new Page(title: "Home", pageorder: 1).save()
        new Page(title: "About", pageorder: 2).save()
        new Page(title: "Portfolio", pageorder: 3).save()
        new Page(title: "Pricing", pageorder: 4).save()
        new Page(title: "Contact", pageorder: 5).save()
    }
    def destroy = {
    }
}
