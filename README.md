# Тренажёр внимания / Attention Trainer

Игра на чистом HTML, CSS и JavaScript — без установки Node.js.

## Структура проекта

```
vnimatilnost/
  index.html       — главная страница
  styles.css       — стили (главный файл для сайта)
  css/styles.css   — копия стилей
  js/              — все скрипты
```

**На GitHub загрузите всё**, особенно `styles.css` в корне и папку `js/`.

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
