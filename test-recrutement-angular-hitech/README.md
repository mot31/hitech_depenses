
# Test front

**Projet en vu de faire passer un test front angular**

Lancez le serveur backend :

    cd backend
    node server.js

Lancez l'application Angular :

    cd frontend
    npm start

## But de l'exercice

En vous servant de l'api fournie, vous réaliserez une application de saisie des dépenses.

Celle-ci consiste en 3 pages : la liste des dépenses, un formulaire d'édition d'une dépense et un formulaire de saisie d'une dépense.

Cette application doit être réalisée en Angular.

## Critères d'évaluation

Vous serez évalué(e) sur la maintenabilité de votre code (lisibilité, extensibilité, non-répétitivité, homogénéité) et sur l'UX (et non l'UI).

Nous souhaitons juger de votre capacité de développement et de votre compréhension d'Angular et de TypeScript. Aussi évitez les librairies qui cacheraient votre talent.

## Modèle

Une dépense peut être de 2 natures : déplacement ou restaurant. Pour un voyage, une distance (nombre entier positif non nul) est requise. Pour un restaurant un nombre d'invité (nombre entier positif ou nul) est demandé.

Les champs communs aux 2 natures sont :

- identifiant numérique (géré par l'api)
- montant (nombre positif non nul)
- date de la dépense (format yyyy-mm-dd)
- commentaire (chaîne de caractère)
- nature ('trip' ou 'restaurant')

## Fonctionnalités demandées

### La liste des dépenses

La liste des dépenses affiche les dépenses fournies par l'api.

Les fonctionnalités demandées pour cette liste sont :

- Affichez les dépenses fournies par l'API.
- Implémentez une pagination simple, persistante durant l'usage de l'application.
- Naviguez vers l'édition d'une dépense au clic sur celle-ci.
- Ajoutez un bouton pour insérer une nouvelle dépense.

### L'édition d'une dépense

Le formulaire d'édition de dépense permet de modifier une dépense.

Les fonctionnalités demandées sont :

- Le formulaire doit permettre de modifier une dépense selon les règles du modèle.
- Validez les champs conformément aux règles fournies.
- Retournez à la liste des dépenses à la suite d'une sauvegarde, sans changer la page courante.

### L'ajout d'une dépense

Même fonctionnement que l'édition de la dépense, mais suite à la sauvegarde, la 1ere page de la liste doit être affichée.

### Suppression d'une dépense

Via le formulaire d'édition de dépense il existe la possibilité de supprimer celle-ci via un bouton.

A la suite d'une suppression, la liste sera affichée sans que la page en cours ait changée.
