App.module('HeaderApp.List', function(List, App, Backbone, Marionette, $, _) {
    List.Controller = {
        listHeader: function () {
            var links = App.request("header:entities");
            var headers = new List.Headers({collection: links});

            headers.on("brand:clicked", function() {
                App.trigger("pages:list");
            });

            headers.on("itemview:navigate", function(childView, model) {
                var url = model.get('url');
                if(url === 'pages') {
                    App.trigger("pages:list");
                }
                else if(url === 'about'){
                    App.trigger("about:show");
                }
                else{
                    throw "No such sub-application: " + url;
                }
            });
            App.headerRegion.show(headers);
        },

        setActiveHeader: function(headerUrl){
            var links = App.request("header:entities");
            var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
            headerToSelect.select();
            links.trigger("reset");
        }
    };
});