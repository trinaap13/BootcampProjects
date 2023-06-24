from flask import Flask, request, redirect, render_template, flash
#from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from flask_sqlalchemy import SQLAlchemy
from forms import AddPetForm, EditPetForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///adopt"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret'

#debug = DebugToolbarExtension(app)

connect_db(app)
with app.app_context():
    db.create_all()

@app.route('/')
def list_pets():
    pets = Pet.query.all()

    return render_template("list_pets.html", pets=pets)

@app.route("/add", methods=["GET", "POST"])
def add_pet():
    form = AddPetForm()

    if form.validate_on_submit():
        new_pet = Pet(
            name=form.name.data, 
            age=form.age.data, 
            photo_url=form.photo_url.data,
            species=form.species.data,
            notes=form.notes.data,
            )
        db.session.add(new_pet)
        db.session.commit()
        flash(f"{new_pet.name} added.")
        return redirect('/')
    else:
        return render_template("add_pet.html", form=form)

@app.route("/<int:id>")
def show_pet_details(id):
    pet = Pet.query.get_or_404(id)

    return render_template("pet_details.html", pet=pet)

@app.route("/<int:id>/edit", methods=["GET", "POST"])
def edit_pet(id):
    pet = Pet.query.get_or_404(id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        photo_url=form.photo_url.data,
        notes=form.notes.data,
        available=form.available.data

        db.session.commit()
        flash("Pet updated!")
        return redirect(f"/{id}")
    else:
        return render_template("edit_pet.html", form=form, pet=pet)

