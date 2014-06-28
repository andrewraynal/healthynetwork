
      .directive('fileDirective', function(){
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
                            request.setRequestHeader("X-Parse-Application-Id", 'HRXk2QaYdSg88Iuy8HbEkLY9JxpVOnMVhh53B2GC');
                            request.setRequestHeader("X-Parse-REST-API-Key", 'uWj9AXCYt6ugHQAXyA7pvmYtSYCJb6f61LeKthv5');
                            request.setRequestHeader("Content-Type", file.type);
                          },
                          url: serverUrl,
                          data: file,
                          processData: false,
                          contentType: false,
                          success: function(data){
                             console.log("File available at:" + data.url);
                            scope.$apply(function() {
                              scope.newPost.photo = data.url;
                            })
                          },
                          error: function(data){
                            var obj = jQuery.parseJSON(data);
                            console.log('faaaaaaail!!!!');
                          }

                        })
                    })
                  }
              }
            });
  

