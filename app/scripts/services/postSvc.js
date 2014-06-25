'use strict';

app.factory('Post', function ($firebase, FBURL, User) {
	var ref = new Firebase(FBURL + 'journal');

	var journal = $firebase(ref);
        console.log("journal contains", journal)
		var Post = {
			all: journal,
			create: function (post) {
				if (User.signedIn()) {
					var user = User.getCurrent();

					post.owner = user.username;

					return journal.$add(post).then(function (ref) {
						var postId = ref.name();

						user.$child('journal').$child(postId).$set(postId);

						return postId;
					})
				}
			},
			find: function (postId) {
				return journal.$child(postId);
			},
			delete: function (postId) {
				if (User.signedIn()) {
					var post = Post.find(postId);

				post.$on('loaded', function () {
					var user = User.findByUsername(post.owner);

				journal.$remove(postId).then(function () {
					user.$child('journal').$remove(postId);
				})
			})
		}
	},
	addComment: function (postId, comment) {
		if (User.signedIn()) {
			var user = User.getCurrent();

			comment.username = user.username;
			comment.postId = postId;

			journal.$child(postId).$child('comments').$add(comment).then(function (ref) {
				user.$child('comments').$child(ref.name()).$set({id: ref.name(), postId: postId});
			});
		}
	},
	deleteComment: function (post, comment, commentId) {
		if (User.signedIn()) {
			var user = User.findByUsername(comment.username);

			post.$child('comments').$remove(commentId).then(function () {
				user.$child('comments').$remove(commentId);
			});
		}
	}
};
	return Post;
});