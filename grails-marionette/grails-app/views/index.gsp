<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="utf-8">
        <title>Marionette example</title>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <nav id="header-region" class="navbar navbar-inverse navbar-fixed-top" role="navigation"></nav>
        <div id="main-region" class="container"></div>
        <div id="dialog-region"></div>
        <div id="modal" class="modal fade"></div>

        <!-- TEMPLATES -->
        <script id="header-template" type="text/x-handlebars-template">
            <a class="navbar-brand" href="#pages">Marionette Pages App</a>
            <div>
                <ul class="nav navbar-nav"></ul>
            </div>
        </script>

        <script id="header-link" type="text/x-handlebars-template">
            <a href="#{{url}}">{{name}}</a>
        </script>

        <script id="page-list-item" type="text/x-handlebars-template">
            <td>{{title}}</td>
            <td>
                <a href="#pages/{{id}}" class="btn btn-small js-show"><i class="icon-eye-open"></i>Show</a>
                <a href="#pages/{{id}}/edit" class="btn btn-small js-edit"><i class="icon-pencil"></i>Edit</a>
                <button class="btn btn-default btn-small js-delete"><i class="icon-remove"></i>Delete</button>
            </td>
        </script>
        
        <script id="page-list" type="text/x-handlebars-template">
            <thead>
                <tr><th>Title</th><th></th></tr>
            </thead>
            <tbody>
            </tbody>
        </script>

        <script id="page-view" type="text/x-handlebars-template"><h1>Title: {{title}}</h1></script>

        <script id="404-view" type="text/x-handlebars-template"><h1>404: Page not found</h1><div class="alert alert-error">The page you are looking for does not exist!</div></script>

        <script id="loading-view" type="text/x-handlebars-template">
            <h1>{{title}}</h1>
            <p>{{message}}</p><div id="spinner"></div>
        </script>

        <script id="page-form" type="text/x-handlebars-template">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close js-cancel">&times;</button>
                    <h3>Modal header</h3>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="page-title" class="control-label">Title</label>
                            <input type="text" class="form-control" id="page-title" name="title" value="{{title}}">
                        </div>
                        <div class="form-group">
                            <label for="page-order" class="control-label">Order</label>
                            <input type="text" class="form-control" id="page-order" name="order" value="{{order}}">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default js-cancel">Cancel</button>
                    <button class="btn btn-primary js-submit">Save changes</button>
                </div>
            </div>
        </script>

        <script id="page-list-layout" type="text/x-handlebars-template">
            <div id="panel-region"></div>
            <div id="pages-region"></div>
        </script>

        <script id="page-list-panel" type="text/x-handlebars-template">
            <button class="btn btn-primary js-new">New Page</button>
            <form class="form-search form-inline pull-right">
                <div class="input-append">
                    <input type="text" class="span2 search-query js-filter-criterion"/>
                    <button type="submit" class="btn btn-default js-filter">Filter pages</button>
                </div>
            </form>
        </script>

        <script id="page-modal-confirm" type="text/x-handlebars-template">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close js-cancel">&times;</button>
                    <h3>Confirm</h3>
                </div>
                <div class="modal-body"><p>Are you sure?</p></div>
                <div class="modal-footer">
                    <button class="btn btn-default js-cancel">Cancel</button>
                    <button class="btn btn-primary js-confirm">Confirm</button>
                </div>
            </div>
        </script>

        <script id="page-list-none" type="text/x-handlebars-template">
            <td colspan="3">No pages to display.</td>
        </script>

        <script id="about-message" type="text/x-handlebars-template">
            <h1>About this app</h1>
            <p>Gemaakt door Ronald de Zanger tbv het leren van Backbone.Marionette.</p>
            <p>Game on!</p>
        </script>

        <script src="js/vendor/underscore.js"></script>
        <script src="js/vendor/jquery.js"></script>
        <script src="js/vendor/bootstrap.js"></script>
        <script src="js/vendor/json2.js"></script>
        <script src="js/vendor/backbone.js"></script>
        <script src="js/vendor/backbone.picky.js"></script>
        <script src="js/vendor/backbone.syphon.js"></script>
        <script src="js/vendor/backbone.babysitter.js"></script>
        <script src="js/vendor/backbone.wreqr.js"></script>
        <script src="js/vendor/backbone.marionette.js"></script>
        <script src="js/vendor/spin.js"></script>
        <script src="js/vendor/jquery.spin.js"></script>
        <script src="js/vendor/handlebars.js"></script>
        <script src="js/apps/config/marionette/regions/dialog.js"></script>
        <script src="js/apps/config/marionette/regions/modal.js"></script>
        <script src="js/main.js"></script>
        <script src="js/entities/common.js"></script>
        <script src="js/entities/header.js"></script>
        <script src="js/entities/page.js"></script>
        <script src="js/apps/pages/pages_app.js"></script>
        <script src="js/common/views.js"></script>
        <script src="js/apps/pages/list/list_view.js"></script>
        <script src="js/apps/pages/list/list_controller.js"></script>
        <script src="js/apps/pages/show/show_view.js"></script>
        <script src="js/apps/pages/show/show_controller.js"></script>
        <script src="js/apps/pages/edit/edit_view.js"></script>
        <script src="js/apps/pages/edit/edit_controller.js"></script>
        <script src="js/apps/pages/new/new_view.js"></script>
        <script src="js/apps/about/about_app.js"></script>
        <script src="js/apps/about/show/show_view.js"></script>
        <script src="js/apps/about/show/show_controller.js"></script>
        <script src="js/apps/header/header_app.js"></script>
        <script src="js/apps/header/list/list_view.js"></script>
        <script src="js/apps/header/list/list_controller.js"></script>
        <script>
            App.start();
        </script>
    </body>
</html>