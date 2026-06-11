# Тренажёр внимания / Attention Trainer

Игра на чистом HTML, CSS и JavaScript — без установки Node.js.

## Структура проекта

```
vnimatilnost/
  index.html       — главная страница
  styles.css       — стили
  login.js         — вход и регистрация (обязательно!)
  i18n.js, game.js, ui.js, app.js
  auth/login.js    — копия (можно не загружать, если есть login.js в корне)
  js/              — исходники для правок
```

**На GitHub загрузите в корень:** `index.html`, `styles.css`, `login.js`, `i18n.js`, `game.js`, `ui.js`, `app.js`.

## GitHub Pages

1. Создайте репозиторий на GitHub и загрузите **весь** проект.
2. Settings → Pages → Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**.
4. Сайт откроется по адресу: `https://ВАШ_ЛОГИН.github.io/ИМЯ_РЕПО/`

Открывайте именно ссылку GitHub Pages, а не файл `index.html` двойным щелчком на компьютере.

## Локальный запуск

- Live Server в VS Code (порт 5501), или
- любой локальный сервер из корня проекта.

## Сборка одного файла (необязательно)

```powershell
.\build.ps1
```

Создаёт `js/main.js` и копирует `login.js` в корень. Для GitHub загрузите файлы из корня проекта — см. список выше.
