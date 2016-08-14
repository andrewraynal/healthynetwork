'use strict';
app.factory('chatsSvc', function($resource) {
	return $resource('chats', {},
		{
			query: {
					method: 'GET',
					isArray: true
			},
			create: {
					method: 'POST'
			}
		});
	})
.factory('chatSvc', function ($resource) {
  return $resource('chat/:id', {},
  {
    id: '@_id'
  },
  {
    show: { method: 'GET'		},
    edit: { method: 'PUT' 	},
    delete: { method: 'DELETE'	}
  });
});
