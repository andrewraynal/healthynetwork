'use strict';

app.factory('postSvc',
	function (userSvc) {

			var Post = {


				create: function (post) {
					if (userSvc.signedIn()) {
						var user = userSvc.getCurrent();

						post.owner = user.username;

						return posts.$add(post).then(function (ref) {
							var postId = ref.name();

							user.$child('posts').$child(postId).$set(postId);

							return postId;
						})
					}
				},
				find: function (postId) {
					return posts.$child(postId);
				},
				delete: function (postId) {
					if (User.signedIn()) {
						var post = Post.find(postId);

					post.$on('loaded', function () {
						var user = userSvc.GetByUsername(post.owner);

					posts.$remove(postId).then(function () {
						user.$child('posts').$remove(postId);
					});
				});
			}
		},
		addComment: function (postId, comment) {
			if (userSvc.signedIn()) {
				var user = userSvc.getCurrent();

				comment.username = user.username;
				comment.postId = postId;

				posts.$child(postId).$child('comments').$add(comment).then(function (ref) {
					user.$child('comments').$child(ref.name()).$set({id:ref.name(), postId:postId});
				});
			}
		},
		deleteComment: function (post, comment, commentId) {
			if (userSvc.signedIn()) {
				var user = userSvc.GetByUsername(comment.username);

				post.$child('comments').$remove(commentId).then(function () {
					user.$child('comments').$remove(commentId);
				});
			}
		}
	};
		return Post;
	});
