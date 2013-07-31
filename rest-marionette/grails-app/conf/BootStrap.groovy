import nl.webexpress.Page

class BootStrap {

    def init = { servletContext ->
    	def page1 = new Page(title:"Home", itemorder:"1").save()
    	def page2 = new Page(title:"About", itemorder:"2").save()
    	def page3 = new Page(title:"Portfolio", itemorder:"3").save()
    	def page4 = new Page(title:"Pricing", itemorder:"4").save()
    	def page5 = new Page(title:"Contact", itemorder:"5").save()
    }
    def destroy = {
    }
}
