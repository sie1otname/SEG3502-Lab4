# SEG3502 — Laboratoire 4

## Exercice évalué (formulaire Angular)

Application Angular avec formulaire réactif et navigation vers une page de résultats.

### Lancer

Node.js et npm sont nécessaires.

```bash
npm install
npm start
```

Ouvrir l'adresse locale indiquée dans le terminal (généralement http://localhost:4200/).

### Vérification

- Prénom et nom requis.
- Téléphone facultatif : exactement 10 chiffres, premier et quatrième différents de 0.
- Courriel facultatif : format validé si fourni.
- Bouton de soumission inactif tant que le formulaire est invalide.
- Soumission valide : navigation vers `/resultat` et tableau des quatre valeurs.
- `/resultat` sans soumission : message explicatif.

### Remise

Enregistrer le projet de cet exercice dans le dépôt GitHub Classroom fourni par le cours. Ne pas inclure `node_modules` ou `dist`.

Le guide HTML indique que seul l'exercice de la page 23 est évalué. Il ne donne pas le lien Classroom ni la date limite.

### Remarque

Les données sont conservées en mémoire pour la navigation entre pages ; elles disparaissent lors d'un rechargement complet. Ce fonctionnement est adapté à l'exercice décrit dans le guide.
