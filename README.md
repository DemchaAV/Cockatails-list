# Cocktail List

`Cocktail List` - это статическое веб-приложение для работы с коктейльной картой. Проект объединяет каталог напитков, режим обучения для персонала и визуальный редактор рецептов. Приложение не требует backend: все страницы работают на `HTML`, `CSS` и `JavaScript`, а данные хранятся прямо в репозитории.

Сейчас в проекте загружается `139` коктейлей из `5` категорий. Приложение можно запускать локально через обычный HTTP-сервер и публиковать как статический сайт.

## Что умеет продукт

- `Главная` (`index.html`) - точка входа с переходом в основные режимы.
- `Catalog` (`mobile_cocktails.html`) - мобильный каталог с поиском, фильтрами и карточками коктейлей.
- `Trainer` (`cocktail_trainer.html`) - обучение по ингредиентам, стеклу, методу приготовления и аллергенам.
- `Builder` (`cocktail_builder.html`) - создание, редактирование, импорт и экспорт рецептов по категориям.
- `PWA` - приложение можно установить на устройство, а основные ресурсы кэшируются через `sw.js`.

## Для чего этот репозиторий

Репозиторий нужен для двух задач:

1. Поддержка и обновление коктейльной базы.
2. Развитие интерфейсов каталога, тренажера и редактора рецептов.

Это особенно удобно для команд, которым нужен офлайн-доступ, быстрый деплой на статический хостинг и прозрачное хранение данных без отдельной CMS.

## Стек

- `HTML` - страницы приложения
- `Tailwind CSS` - генерация финального `styles.css`
- `Vanilla JavaScript` - вся логика интерфейса и загрузки данных
- `Node.js` - утилиты проверки и нормализации `id`
- `Python` - сервисные скрипты для генерации конфигурации и синхронизации аллергенов

## Структура проекта

- `index.html` - главная страница
- `mobile_cocktails.html` - каталог
- `cocktail_trainer.html` - тренажер
- `cocktail_builder.html` - редактор рецептов
- `data/config.js` - список файлов категорий для загрузки
- `data/loader.js` - общий загрузчик, собирающий данные в `window.allCocktails`
- `data/categories/*.js` - категории с коктейлями
- `styles.css` - собранные стили
- `src/tailwind.css` - исходник стилей для сборки
- `scripts/ensure-unique-cocktail-ids.js` - проверка и исправление `id`
- `manifest.json` - метаданные PWA
- `sw.js` - service worker и офлайн-кэш

## Быстрый старт

Не открывайте приложение через `file://`. Загрузка данных и работа `service worker` рассчитаны на `http://` или `https://`.

### 1. Установить зависимости

```powershell
npm install
```

### 2. Поднять локальный сервер

```powershell
python -m http.server 8080
```

### 3. Открыть приложение

```text
http://localhost:8080
```

Основные страницы для проверки:

- `http://localhost:8080/index.html`
- `http://localhost:8080/mobile_cocktails.html`
- `http://localhost:8080/cocktail_trainer.html`
- `http://localhost:8080/cocktail_builder.html`

## NPM и Python команды

```powershell
npm run build:css
npm run check:ids
npm run fix:ids
npm run bump:version
python auto_config.py
python sync_allergens_from_viewthemenu.py
```

Что делает каждая команда:

- `npm run build:css` - собирает `styles.css` из `src/tailwind.css`
- `npm run check:ids` - проверяет уникальность и нормализацию `id` у коктейлей
- `npm run fix:ids` - автоматически исправляет проблемные `id`
- `npm run bump:version` - увеличивает версию приложения для PWA-обновлений
- `python auto_config.py` - пересобирает `data/config.js` по текущему набору файлов категорий
- `python sync_allergens_from_viewthemenu.py` - обновляет аллергены из внешнего JSON-источника и создает отчет

## Как устроены данные

Каждый файл в `data/categories/` регистрирует массив коктейлей через `window.registerCocktails(categoryName, cocktails)`.

Пример структуры:

```javascript
if (typeof window.registerCocktails === 'function') {
  window.registerCocktails('classic', [
    {
      id: 'negroni-123abc',
      name: 'Negroni',
      category: 'classic',
      method: 'Stir',
      glass: 'Rocks',
      ice: 'Cubed',
      garnish: 'Orange peel',
      ingredients: [
        { name: 'Gin', qty: '25ml' },
        { name: 'Campari', qty: '25ml' },
        { name: 'Vermouth', qty: '25ml' }
      ],
      allergens: 'SULPHITES'
    }
  ]);
}
```

Поле `allergens` может быть:

- `null`
- пустой строкой
- строкой со списком значений через запятую, например `GLUTEN, MILK`

## Как добавить новую категорию

1. Создайте файл `data/categories/<name>.js`.
2. Зарегистрируйте данные через `window.registerCocktails(...)`.
3. Запустите `python auto_config.py`.
4. При необходимости выполните `npm run check:ids`.
5. Проверьте загрузку категории в `Catalog`, `Trainer` и `Builder`.

## Рекомендуемый рабочий процесс для Builder

`cocktail_builder.html` хранит рабочее состояние в `localStorage` и подходит для ручного редактирования карточек.

Типовой сценарий:

1. Откройте `Builder`.
2. Создайте или измените рецепты.
3. Экспортируйте нужную категорию в `*.js`.
4. Сохраните файл в `data/categories/`.
5. Запустите `python auto_config.py`.
6. Проверьте результат в каталоге и тренажере.

## Синхронизация аллергенов

Скрипт `sync_allergens_from_viewthemenu.py`:

- читает внешний JSON с аллергенами
- сопоставляет позиции с локальными коктейлями
- обновляет поле `allergens` в файлах категорий
- сохраняет отчет в `data/allergen_sync_from_viewthemenu_report.json`

По умолчанию скрипт использует источник из соседнего проекта `Food-list`, но можно передать свой путь:

```powershell
python sync_allergens_from_viewthemenu.py --scraped "C:\path\to\viewthemenu_allergens.json"
```

## PWA и обновления

- `manifest.json` хранит имя, иконки и версию приложения
- `sw.js` отвечает за кэширование страниц и данных
- после изменений интерфейса или данных полезно обновлять версию и проверять, что клиент не держит старый кэш

Если браузер показывает устаревшую версию:

1. обновите версию приложения
2. очистите `service worker` и кэш в DevTools
3. перезагрузите страницу

## Минимальная проверка после изменений

1. Поднимите локальный сервер.
2. Откройте `index.html`, `mobile_cocktails.html`, `cocktail_trainer.html` и `cocktail_builder.html`.
3. Убедитесь, что категории загружаются, поиск и фильтры работают, а новые коктейли видны в интерфейсе.
4. Если менялись данные, запустите `npm run check:ids`.

## Идея продукта в одном абзаце

`Cocktail List` - это легковесный офлайн-дружелюбный инструмент для барной команды: здесь можно быстро найти рецепт, проверить знания персонала и поддерживать базу коктейлей без сложной админки и серверной части.
