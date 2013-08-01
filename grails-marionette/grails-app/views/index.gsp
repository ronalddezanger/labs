<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="utf-8">
        <title>Marionette example</title>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="conatiner">
                    <span class="brand">Marionette App</span>
                </div>
            </div>
        </div>
        <div id="main-region" class="container"></div>

        <script id="page-list-item" type="text/x-handlebars-template">
            <td>{{title}}</td>
            <td>
                <a href="#pages/{{id}}" class="btn btn-small js-show">
                    <i class="icon-eye-open"></i>
                    Show
                </a>
                <button class="btn btn-small js-delete">
                    <i class="icon-remove"></i>
                    Delete
                </button>
            </td>
        </script>
        
        <script id="page-list" type="text/x-handlebars-template">
            <thead>
                <tr><th>Title</th><th></th></tr>
            </thead>
            <tbody>
            </tbody>
        </script>

        <script id="page-view" type="text/x-handlebars-template"><h1>{{title}}</h1></script>

        <script id="404-view" type="text/x-handlebars-template"><h1>404: Page not found</h1><div class="alert alert-error">The page you are looking for does not exist!</div></script>

        <script src="js/underscore.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/json2.js"></script>
        <script src="js/backbone.js"></script>
        <script src="js/backbone.babysitter.js"></script>
        <script src="js/backbone.wreqr.js"></script>
        <script src="js/backbone.marionette.js"></script>
        <script src="js/handlebars.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/main.js"></script>
        <script src="js/entities/page.js"></script>
        <script src="js/apps/pages/pages_app.js"></script>
        <script src="js/apps/pages/list/list_view.js"></script>
        <script src="js/apps/pages/list/list_controller.js"></script>
        <script src="js/apps/pages/show/show_view.js"></script>
        <script src="js/apps/pages/show/show_controller.js"></script>
        <script>
            App.start();
        </script>
    </body>
</html>