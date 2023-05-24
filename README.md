## Test technique React / Javascript - 5 Degrés

Bienvenue sur le test technique Développeur Frontend de 5 Degrés, spécialité **React & Javascript** !

Ce test vise à évaluer votre maîtrise du langage Javascript et de la librairie React. L’exercice est basé sur le framework Next.js (avec une dose de Typescript) mais vous n’avez pas besoin de connaitre le fonctionnement de ces derniers pour la réalisation de l’exercice.

Grâce à ce test, vous pourrez démontrer votre capacité à résoudre des problèmes, à écrire un code clair et efficace, ainsi qu'à mettre en pratique les concepts clés de React. Il n'y a pas de pression particulière à avoir : la vitesse de résolution de l’exercice n’a pas d’importance, ni les commits intermédiaires qui vous permettront d’arriver au résultat. En moyenne, nos candidats résolvent ce test en 2 heures.

N'hésitez pas à poser des questions si vous avez besoin de clarifications. Notre but est de comprendre comment vous abordez les problèmes, pas juste d’obtenir le résultat final. Vous pouvez néanmoins nous impressionner en ajoutant des fonctionnalités ou en améliorant la qualité du code existant si vous le jugez nécessaire.

Ce test est destiné aux développeurs React de **niveau intermédiaire** (2 à 5 ans d’expérience en React/Javascript). Il nous permettra de vérifier votre niveau de compétences sur les points suivants :

- Découper une intégration de maquette en composants atomiques
- Implémenter une fonctionnalité de filtrage d’une liste de données en Javascript
- Rédiger des tests unitaires en Jest

Des points bonus seront accordés en cas d’utilisation judicieuse des Hooks React et d’un typage fort en Typescript (mais n’entraineront pas de pénalité en leur absence).

## Contexte

Voici une présentation du projet et de la mission sur laquelle il vous est demandé d’intervenir.

L’agence 5 Degrés a décidé de développer une plateforme web à destination de ses salariés et consultants, afin d’encourager le covoiturage au sein de l’équipe. Les salariés peuvent poster une annonce qui correspond au trajet entre leur domicile et le bureau parisien de 5 Degrés (baptisé le Penta’), ou inversement le trajet du retour du bureau jusqu’au domicile.

Pas de chance, tous les consultants 5 Degrés sont actuellement en mission chez des clients ! Impossible de finaliser le développement de la plateforme. Votre mission, si vous l’acceptez, est d'intégrer un bout de maquette, d'implémenter une fonctionnalité de filtrage, et enfin de rédiger des tests unitaires.

## Démarrer le projet

Le projet est basé sur le framework Next.js, qui permet de développer des applications React avec un serveur Node.js. Il est préconfiguré avec Typescript et Tailwind CSS.

Pour lancer le projet sur votre poste, vous devez avoir installé au préalable Node.js (version 14.6.0 ou supérieure) et un gestionnaire de paquets (NPM ou Yarn).

Pour installer les dépendances du projet, lancez la commande suivante :
```bash
npm install
# ou
yarn install
```
Une fois l'installation terminée, vous pouvez démarrer le projet en local avec la commande suivante :
```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans le navigateur pour voir le résultat.

Tout le reste se passe dans le dossier *components*. Inutile de toucher au reste sauf si vous en ressentez le besoin. C'est parti !

## Consignes

### Étape 1 : Création d'un composant React à partir de la maquette

La maquette a presque été entièrement intégrée en HTML/CSS, avec l'aide de Tailwind CSS.
Il ne reste plus qu'un composant majeur non finalisé : la liste des toutes les annonces de covoiturage.
Le composant a été imaginé comme ceci en version desktop :

![Desktop-UsersCard.png](public%2FDesktop-UsersCard.png)

Et en version mobile :

![Mobile-UsersCard.png](public%2FMobile-UsersCard.png)

Votre mission est de terminer l'intégration HTML/CSS de ce composant. La structure existe déjà dans `components/UsersEntry.tsx`, il ne reste plus qu'à remplir le conteneur avec les éléments intérieurs (en trois colonnes sur desktop, deux colonnes sur mobile).

L'objectif n'est pas d'obtenir un résultat pixel-perfect, mais plutôt de démontrer votre capacité à découper une maquette en éléments atomiques, et à les imbriquer de façon claire et compréhensible.

Vous pouvez continuer à utiliser Tailwind CSS pour la partie CSS, ou bien utiliser un autre librairie voir du CSS pur si vous le souhaitez (à vous d'installer les packages dont vous avez besoin).

### Étape 2 : Implémentation d'une fonctionnalité de filtrage à partir d'une liste de données

Si vous avez lancé le projet, vous avez sûrement vu que le header contient une ligne avec toutes les lettres de l'alphabet. Il s'agit du filtre alphabétique des annonces par ville de départ (on va ignorer les villes d'arrivée dans le cadre de ce test).

La liste des annonces est stockée dans le fichier `public/data.json`. Ce fichier contient un tableau d'objets, chaque objet représentant une annonce de covoiturage.
Le tableau est passé en props au composant `components/Homepage.tsx`, qui se charge ensuite de l'afficher dans `components/UsersAllPosts.tsx`.

La fonction de tri alphabétique se trouve dans `components/Homepage.tsx` mais n'est pas encore implémentée. À vous de compléter la fonction `filterPosts()` afin de n'afficher que les annonces dont la ville de départ commence par la lettre sélectionnée. Par exemple si l'utilisateur clique sur la lettre "M", seules les annonces dont la ville de départ commence par "M" doivent être affichées, par exemple Montrouge (annonces n°3 et 4).

### Étape 3 : Rédaction de tests unitaires

La dernière étape consiste à rédiger quelques tests unitaires pour le composant `components/UsersCard.tsx` qui correspond aux "dernières annonces" en bas de la page d'accueil.

Les tests sont à rédiger dans le fichier `components/UsersCard.test.tsx`. Vous pouvez utiliser le framework Jest et React-Testing-Library, qui sont déjà installés dans le projet (une structure de test est disponible dans `components/Title.test.tsx`). Si vous êtes plus à l'aise avec une autre librairie de testing, n'hésitez pas à l'installer.

Il s'agit d'un composant d'affichage plutôt simple : les tests vont se limiter à vérifier que le composant s'affiche correctement en fonction des props passées en paramètre. À vous de prévoir les cas de tests pertinents !

## Soumettre le test technique

Vous êtes en train de lire ces lignes : cela signifie que vous avez un accès en lecture/écriture à ce repository Github.

1) Pour apporter vos modifications au code, il suffit de créer une nouvelle branche à partir de la branche `main`, qui s'appellera `test-votre-nom`. Vous pouvez ensuite travailler sur cette branche et faire vos commits dessus.
2) Une fois vos modifications commitées et pushées sur Github, vous pouvez créer une Pull Request vers la branche `main` et nous la soumettre pour relecture.  Nous vous contacterons ensuite pour faire un retour sur votre travail.

Nous sommes impatients de voir le résultat et d'apprécier vos talents de développeur. Bon courage !
