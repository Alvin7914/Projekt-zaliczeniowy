# Projekt-zaliczeniowy

Opis: Aplikacja jest przeznaczona dla korepetytora, prowadzącego zajęcia poza swoim miejscem zamieszkania, pomagająca organizować jego plan pracy
Główne funkcje: edytowalny tygodniowy plan zajęć, lista uczniów, zbiór materiałów edukacyjnych oraz krótkie podsumowanie planu dnia na stronie startowej


Lista 'Must have' projektu:
- główny layout strony, składający się z headera i footera, stale widocznych na stronie oraz części main, która renderuje się w zależności od aktualnej ścieżki
- header, zawierający imię użytkownika i nawigację
- landing page, który przy pierwszym uruchomieniu wyświetla okno wymagające od użytkownika podania imienia (do tego czasu nawigacja jest zablokowana, ale widoczna)
- landing page, który po podaniu imienia, stale wyświetla plan zajęć na aktualny dzień tygodnia oraz listę uczniów, która tego dnia ma zajęcia
- zakładka "Plan zajęć" zawierająca tygodniowy plan zajęć w postaci tabeli z dniami tygodnia w pierwszym rzędzie i godzinami w pierwszej kolumnie
- w zakładce "Plan zajęć" znajduje się przycisk służący do dodawania nowych wpisów w tabeli (wybór ucznia, dnia i godziny, wraz z walidacją, blokującą dodanie wpisu bez ucznia)
- wpis w tabeli usuwa się klikając na niego
- zakładka "Lista uczniów" zawierająca aktualną listę uczniów korepetytora, każdy uczeń posiada zapisane imię, nazwisko, adres zamieszkania i numer kontaktowy
- każdy uczeń może zostać usunięty z listy poprzez wciśnięcie przycisku obok jego danych
- w zakładce "Lista uczniów" znajduje się przycisk służący do dodawania nowych uczniów, po wypełnieniu walidowanego formularza
- zakładka "Materiały edukacyjne" zawierająca dwie listy linków, pierwsza to lista plików, druga to lista przydatnych stron
- każdy plik lub strona może zostać usunięty z listy poprzez wciśnięcie przycisku obok jego nazwy
- w zakładce "Materiały edukacyjne" znajdują się dwa przyciski służące do dodawania nowych plików i stron, po wypełnieniu walidowanego formularza
- dane zapisywane w każdej z zakładek trafiają do localStorage, by mogły być użyte przy ponownych odwiedzinach strony

