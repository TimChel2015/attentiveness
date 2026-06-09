# Тренажёр внимания / Attention Trainer

Игра на чистом HTML, CSS и JavaScript — без установки Node.js.

## Структура проекта

```
vnimatilnost/
  index.html       — главная страница
  css/styles.css   — стили
  js/i18n.js       — переводы
  js/auth.js       — вход и регистрация
  js/game.js       — логика игры
  js/ui.js         — интерфейс
  js/app.js        — запуск приложения
  js/main.js       — (необязательно) один собранный файл
  build.ps1        — сборка main.js из модулей
```

**На GitHub нужно загрузить всю папку целиком**, включая `css/` и все файлы в `js/`.

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

Создаёт `js/main.js`. Для GitHub Pages достаточно отдельных файлов в `js/` — `index.html` уже подключает их.
