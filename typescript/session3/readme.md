# Patrons de conception pour types inductifs - Exemple des mots

## Définitions
Voici une définition informelleinductive de mots, analogues de chaînes de caractères de type String: un mot est
- soit le mot vide,
- soit un caractère suivi d'un mot,
- soit la concaténation de deux mots.

Soit en notation de Backus-Naur: 

`Mot ::= Vide | cons(char, Mot) | Concatenation(Mot, Mot)`

