class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"/api/pages/$id?" (resource:"page") {
			constraints {
				// apply constraints here
			}
		}


		"/"(view:"/index")
		"500"(view:'/error')
	}
}
