class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.${format})?"{
            constraints {
                // apply constraints here
            }
        }

        "/api/pages"(resources:"page")

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
