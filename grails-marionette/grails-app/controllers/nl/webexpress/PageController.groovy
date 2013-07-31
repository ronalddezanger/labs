package nl.webexpress

import grails.transaction.*
import static org.springframework.http.HttpStatus.*
import static org.springframework.http.HttpMethod.*

@Transactional(readOnly = false)
class PageController {

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Page.list(params), model: [pageCount: Page.count()]
    }

    def show(Page page) {
        respond page
    }

    @Transactional
    def save(Page page) {
        if(page.hasErrors()) {
            respond page.errors, view:'create'
        } else {
            page.save flush: true
            withFormat {
                html {
                    flash.message = message(code: 'default.created.message', args: [message(code: 'page.label', default: 'Page'), book.id])
                    redirect page
                }
                '*' { render status: CREATED }
            }
        }
    } 

    @Transactional
    def update(Page page) {
        if(page == null) {
            render status: NOT_FOUND
        } else {
            if(page.hasErrors()) {
                respond page.errors, view: 'edit'
            } else {
                page.save flush: true
                withFormat {
                    html {
                        flash.message = message(code: 'default.updated.message', args: [message(code: 'page.label', default: 'Page'), book.id])
                        redirect page
                    }
                    '*' { render status: OK }
                }
            }
        }
    }

    @Transactional
    def delete(Page page) {
        if(page == null) {
            render status: NOT_FOUND
        } else {
            if(page.hasErrors()) {
                respond page.errors, view: 'index'
            } else {
                page.save flush: true
                withFormat {
                    html {
                        flash.message = message(code: 'default.deleted.message', args: [message(code: 'page.label', default: 'Page'), book.id])
                        redirect action: "index", method: "GET"
                    }
                    '*' { render status: NO_CONTENT }
                }
            }
        }
    }

}
