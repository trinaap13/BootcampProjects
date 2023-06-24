from flask import Flask, request, redirect, render_template, flash
# from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, Tag, PostTag
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///blogly"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret'

connect_db(app)
with app.app_context():
    db.create_all()


@app.route('/')
def root():
    return redirect("/users")

@app.route('/users')
def get_users():
    users = User.query.all()
    return render_template('users.html', users=users)


@app.route('/users/new', methods=["GET"])
def create_user():
    return render_template('create_user_form.html')

@app.route('/users/new', methods=["POST"])
def submit_user_form():
    new_user = User(
        first_name = request.form['first_name'],
        last_name = request.form['last_name'],
        image_url = request.form['image_url'] or None)

    db.session.add(new_user)
    db.session.commit()
    flash(f"User {new_user.first_name} {new_user.last_name} added successfully!")
    return redirect('/users')

@app.route('/users/<int:user_id>')
def show_user_details(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('user_detail.html', user=user)

@app.route('/users/<int:user_id>/edit')
def users_edit(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit_user.html', user=user)

@app.route('/users/<int:user_id>/edit', methods=["POST"])
def users_update(user_id):
    user = User.query.get_or_404(user_id)
    user.first_name = request.form['first_name']
    user.last_name = request.form['last_name']
    user.image_url = request.form['image_url']

    db.session.add(user)
    db.session.commit()
    return redirect("/users")

@app.route('/users/<int:user_id>/delete', methods=["POST"])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)

    db.session.delete(user)
    db.session.commit()
    return redirect("/users")

@app.route('/users/<int:user_id>/posts/new')
def new_post_form(user_id):
    user = User.query.get_or_404(user_id)
    tags = Tag.query.all()

    return render_template("post_form.html", user=user, tags=tags)


@app.route('/users/<int:user_id>/posts/new', methods=["POST"])
def submit_new_post(user_id):
    user = User.query.get_or_404(user_id)
    tag_ids = [int(num) for num in request.form.getlist("tags")]
    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    new_post = Post(
        title = request.form['title'],
        content = request.form['content'],
        user=user
    )

    db.session.add(new_post)
    db.session.commit()
    
    flash(f"Post added successfully!")
    return redirect(f'/users/{user_id}')

@app.route('/posts/<int:post_id>')
def show_post(post_id):
    post = Post.query.get_or_404(post_id)

    return render_template('view_post.html', post=post)

@app.route("/posts/<int:post_id>/edit")
def get_edit_post_form(post_id):
    post = Post.query.get_or_404(post_id)
    tags = Tag.query.all()

    return render_template('edit_post.html', post=post, tags=tags)

@app.route('/posts/<int:post_id>/edit', methods=["POST"])
def edit_post(post_id):
    post = Post.query.get_or_404(post_id)
    post.title = request.form['title']
    post.content = request.form['content']

    tag_ids = [int(num) for num in request.form.getlist("tags")]
    post.tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    db.session.add(post)
    db.session.commit()
    return redirect(f"/posts/{post_id}")

@app.route('/posts/<int:post_id>/delete', methods=["POST"])
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)

    db.session.delete(post)
    db.session.commit()
    return redirect(f"/users/{post.user_id}")

@app.route('/tags')
def get_all_tags():
    tags = Tag.query.all()

    return render_template('list_tags.html', tags=tags)

@app.route('/tags/<int:tag_id>')
def show_tag_details(tag_id):
    tag = Tag.query.get_or_404(tag_id)

    return render_template('tag_details.html', tag=tag)

@app.route('/tags/new')
def show_tags_form():
    posts = Post.query.all()

    return render_template('create_tag.html', posts=posts)


@app.route('/tags/new', methods=["POST"])
def create_new_tag():
    post_ids = [int(num) for num in request.form.getlist("posts")]
    posts = Post.query.filter(Post.id.in_(post_ids)).all()
    new_tag = Tag(name=request.form['name'], posts=posts)

    db.session.add(new_tag)
    db.session.commit()
    flash(f"Tag '{new_tag.name}' added.")

    return redirect("/tags")


@app.route('/tags/<int:tag_id>/edit')
def show_tag_edit_form(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    posts = Post.query.all()

    return render_template('edit_tags.html', tag=tag, posts=posts)


@app.route('/tags/<int:tag_id>/edit', methods=["POST"])
def edit_tags(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    tag.name = request.form['name']
    post_ids = [int(num) for num in request.form.getlist("posts")]
    tag.posts = Post.query.filter(Post.id.in_(post_ids)).all()

    db.session.add(tag)
    db.session.commit()
    flash(f"Tag '{tag.name}' edited.")

    return redirect("/tags")

@app.route('/tags/<int:tag_id>/delete', methods=["POST"])
def delete_tags(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    db.session.delete(tag)
    db.session.commit()
    flash(f"Tag '{tag.name}' deleted.")

    return redirect("/tags")

# GET /tags/[tag-id]/edit
# Show edit form for a tag.
# POST /tags/[tag-id]/edit
# Process edit form, edit tag, and redirects to the tags list.
# POST /tags/[tag-id]/delete
# Delete a tag.