# Random Letter Anonymizer

Szybka, lokalna anonimizacja fragmentów tekstu w edytorze VS Code — bez wysyłania czegokolwiek na zewnątrz.

Zaznacz fragment tekstu (np. nazwisko, imię, nazwę użytkownika) i uruchom polecenie
**„Anonimizuj zaznaczenie (losowe litery)"**, a każda litera w zaznaczeniu zostanie
zamieniona na losową literę tej samej wielkości. Polskie znaki (ą, ć, ę, ł, ń, ó, ś, ź, ż)
są uwzględniane. Cyfry, spacje i znaki interpunkcyjne pozostają bez zmian.

## Instalacja

1. Pobrać całość z github lub tylko plik vsix
2. W VSC nacisnąć: Cmd+Shift+P
3. Wpisać Extensions: Install from VSIX
4. Wskazać pobrany plik .vsix

## Użycie

1. Zaznacz tekst w edytorze.
2. Kliknij prawym przyciskiem myszy i wybierz **Anonimizuj zaznaczenie (losowe litery)**,
   użyj Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`), albo naciśnij na windows `Ctrl+M` na mac 'cmd+R'.

Przykład: `Kowalski` → `Śmzćeufń`

## Uwagi

Losowość generowana jest lokalnie w edytorze — tekst nigdy nie opuszcza Twojego komputera.
Narzędzie nie gwarantuje kryptograficznej nieodwracalności — to proste narzędzie do szybkiego
zaciemniania danych w zrzutach ekranu, logach czy przykładach kodu, a nie mechanizm zgodny
z wymogami bezpieczeństwa danych osobowych.

## Licencja

MIT
