// Автоматическое объединение всех категорий в allCocktails
// После загрузки всех файлов категорий вызывает событие 'cocktailsLoaded'

(function () {
    console.log('🔄 Combining cocktail categories...');

    window.allCocktails = [];

    if (typeof COCKTAIL_CATEGORIES !== 'undefined') {
        COCKTAIL_CATEGORIES.forEach(category => {
            // Конвертируем имя категории в валидное имя переменной JS (удаляем дефисы)
            const varName = category.replace(/-/g, '') + 'Cocktails';

            // Получаем переменную из window scope
            const categoryData = window[varName];

            console.log(`  Checking ${category} → ${varName}:`, categoryData ? categoryData.length + ' cocktails' : 'NOT FOUND');

            if (categoryData && Array.isArray(categoryData)) {
                window.allCocktails.push(...categoryData);
                console.log(`  ✓ Loaded ${categoryData.length} cocktails from ${category}`);
            } else {
                console.warn(`  ⚠ Category data not found: ${varName}`);
            }
        });

        console.log(`✅ Total: ${window.allCocktails.length} cocktails loaded from ${COCKTAIL_CATEGORIES.length} categories`);

        // Отправляем событие что данные загружены
        window.dispatchEvent(new CustomEvent('cocktailsLoaded'));
    } else {
        console.error('❌ COCKTAIL_CATEGORIES not defined. Make sure config.js is loaded first.');
    }
})();
