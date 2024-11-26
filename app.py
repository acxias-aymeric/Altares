from flask import Flask, render_template, request, jsonify

# Créer l'application Flask
app = Flask(__name__)

# Route principale : retourne la page HTML
@app.route('/')
def index():
    return render_template('index.html') 

# Route pour gérer les données du formulaire
@app.route('/search', methods=['POST'])
def search():
    data = request.json  # Récupère les données envoyées via fetch
    print("Données reçues :", data)  # Pour debug
    return jsonify({"message": "Recherche effectuée avec succès", "data": data})

# Route secondaire : permet d'afficher la page avec les infos supplier
@app.route('/form')
def form_page():
    return render_template('form.html')

# Lancer le serveur
if __name__ == '__main__':
    app.run(debug=True)
