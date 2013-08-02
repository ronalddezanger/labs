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

        <!-- TEMPLATES -->

        <script id="page-list-item" type="text/x-handlebars-template">
            <td>{{title}}</td>
            <td>
                <a href="#pages/{{id}}" class="btn btn-small js-show"><i class="icon-eye-open"></i>Show</a>
                <a href="#pages/{{id}}/edit" class="btn btn-small js-edit"><i class="icon-pencil"></i>Edit</a>
                <button class="btn btn-small js-delete"><i class="icon-remove"></i>Delete</button>
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
            <h1>Edit {{title}}</h1>
            <form>
                <div class="control-group">
                    <label for="page-title" class="control-label">Title: </label>
                    <input type="text" id="page-title" name="title" value="{{title}}">
                </div>
                <div class="control-group">
                    <label for="page-order" class="control-label">Order: </label>
                    <input type="text" id="page-order" name="pageorder" value="{{order}}">
                </div>
                <button class="btn js-submit">Save changes</button>
            </form>

            <!--<div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">Edit {{title}}</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="control-group">
                                    <label for="page-title" class="control-label">Title: </label>
                                    <input type="text" id="page-title" name="title" value="{{title}}">
                                </div>
                                <div class="control-group">
                                    <label for="page-order" class="control-label">Order: </label>
                                    <input type="text" id="page-order" name="pageorder" value="{{order}}">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn">Close</button>
                            <button class="btn js-submit">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>-->
        </script>

        <script src="js/underscore.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/json2.js"></script>
        <script src="js/backbone.js"></script>
        <script src="js/backbone.syphon.js"></script>
        <script src="js/backbone.babysitter.js"></script>
        <script src="js/backbone.wreqr.js"></script>
        <script src="js/backbone.marionette.js"></script>
        <script src="js/spin.js"></script>
        <script src="js/jquery.spin.js"></script>
        <script src="js/handlebars.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/main.js"></script>
        <script src="js/entities/page.js"></script>
        <script src="js/common/views.js"></script>
        <script src="js/apps/pages/pages_app.js"></script>
        <script src="js/apps/pages/list/list_view.js"></script>
        <script src="js/apps/pages/list/list_controller.js"></script>
        <script src="js/apps/pages/show/show_view.js"></script>
        <script src="js/apps/pages/show/show_controller.js"></script>
        <script src="js/apps/pages/edit/edit_view.js"></script>
        <script src="js/apps/pages/edit/edit_controller.js"></script>
        <script>
            App.start();
        </script>
    </body>
</html>