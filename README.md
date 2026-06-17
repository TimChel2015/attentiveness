# Тренажёр внимания / Attention Trainer

Игра на HTML, CSS и JavaScript.

## Что загрузить на GitHub (только 3 файла!)

```
index.html
styles.css
main.js
```

1. GitHub → ваш репозиторий → **Add file** → **Upload files**
2. Перетащите эти **3 файла** из папки `C:\Users\Dashka\vnimatilnost`
3. **Commit changes**
4. Settings → Pages → Branch: **main**, folder: **/ (root)**
5. Откройте сайт и обновите страницу (на телефоне — потяните вниз)

## После правок в коде

В папке проекта запустите:

```powershell
.\build.ps1
```

Скрипт соберёт новый `main.js` — загрузите его на GitHub вместе с `index.html` и `styles.css`.

## Локальная разработка

Правки делайте в папке `js/`, затем `.\build.ps1`.

Структура исходников:

```
js/
  i18n.js
  auth/login.js
  game.js
  ui.js
  app.js
css/styles.css
```
