
      .directive('uploadDirective', function(){
            return{
              restrict: 'E',
              
              templateUrl: 'views/uploadimg.html',
              link: function(scope, element, attrs){
                  var file;
                  $('#fileupload').bind("change", function(element){
                    var files = element.target.files || element.dataTransfer.files;
                    file = files [0];
                    console.log('file is:', file);

                    var serverUrl = 'https://api.parse.com/1/files/' + file.name;

                    $.ajax({
                        type: "POST",
                        beforeSend: function(request){
                            request.setRequestHeader("X-Parse-Application-Id", 'NEED ID');
                            request.setRequestHeader("X-Parse-REST-API-Key", 'NEED KEY');
                            request.setRequestHeader("Content-Type", file.type);
                          },
                          url: serverUrl,
                          data: file,
                          processData: false,
                          contentType: false,
                          success: function(data){
                             console.log("File available at:" + data.url);
                            scope.$apply(function() {
                              scope.newDetail.img = data.url;
                            })
                          },
                          error: function(data){
                            var obj = jQuery.parseJSON(data);
                            console.log('no');
                          }

                        })
                    })
                  }
              }
            });
  

