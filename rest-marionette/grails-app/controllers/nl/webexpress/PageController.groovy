package nl.webexpress

import grails.converters.JSON

class PageController {

    /**
     * GET api/pages : list of all pages
     * GET api/pages/{id} : get page with id
     */
    def show = {
        if (params.id) {
            log.debug("findById: ${params.id}")
            render Page.findById(params.id) as JSON
        } else {
            log.debug("findAll")
            render Page.findAll() as JSON
        }
    }

    /**
     * POST api/pages : add a new page
     */
    def save = {
        if(params.id) {
            log.error("cannot create a new page from an existing page - id: ${params.id}")
            render "ERROR"
        } else {
            log.debug("creating new page")
            // not sure if this approach works with relations/nested objects
			def page = new Page(request.JSON);
			render( page.save() as JSON )
        }
    }

    /**
     * PUT api/pages/{id} : update page with id
     */
    def update = {
        if(params.id) {
            log.debug("update page with id: ${params.id}")
            def updatedpage = Page.findById(params.id)
            if(!updatedpage) {
                log.debug("Unable to find page with id: ${params.id}")
                render "ERROR"
            } else {
				bindData(updatedpage, request.JSON)
				render(updatedpage.save() as JSON )
            }
        } else {
            log.error("cannot update a new page")
            render "ERROR"
        }
    }

    /**
     * DELETE api/pages/{id} : delete page with id
     */
    def delete = {
        if(params.id) {
            log.debug("delete page with id: ${params.id}")
			def page = Page.findById(params.id)
			page?.delete()
            render "OK"
        } else {
            log.debug("cannot delete page without providing an id")
            render "ERROR"
        }
    }
}
