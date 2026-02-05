(function () {
    console.log('🍹 Cocktail Loader: Initializing...');

    window.allCocktails = window.allCocktails || []; // Global container
    const loadedCategories = new Set();
    let totalCategories = 0;

    // Registry function called by category files
    window.registerCocktails = function (category, cocktails) {
        console.log(`🍹 Loader: Registered ${cocktails.length} cocktails for category '${category}'`);

        // Add valid category field if missing or mismatched (optional safety)
        cocktails.forEach(c => c.category = category);

        // Add to global array
        window.allCocktails.push(...cocktails);

        loadedCategories.add(category);
        checkCompletion();
    };

    function checkCompletion() {
        if (loadedCategories.size === totalCategories && totalCategories > 0) {
            console.log(`✅ Loader: All ${totalCategories} categories loaded. Total cocktails: ${window.allCocktails.length}`);

            window.cocktailsDataReady = true;

            // Dispatch event
            const event = new Event('cocktailsLoaded');
            window.dispatchEvent(event);
        }
    }

    function loadScript(src) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onerror = () => console.error(`❌ Failed to load script: ${src}`);
        document.head.appendChild(script);
    }

    // Load config first
    const configScript = document.createElement('script');
    configScript.src = 'data/config.js';
    configScript.onload = () => {
        if (window.cocktailConfig && window.cocktailConfig.categories) {
            const categories = window.cocktailConfig.categories;
            totalCategories = categories.length;
            console.log(`🍹 Loader: Found ${totalCategories} categories in config.`);

            if (totalCategories === 0) {
                const event = new Event('cocktailsLoaded');
                window.dispatchEvent(event);
                return;
            }

            // Check if any pending cocktails were loaded before config
            if (window.pendingCocktails) {
                window.pendingCocktails.forEach(item => {
                    window.registerCocktails(item.category, item.data);
                });
                window.pendingCocktails = null;
            }

            // Load each category file
            categories.forEach(file => {
                loadScript(`data/categories/${file}`);
            });
        } else {
            console.error('❌ Loader: Invalid config format.');
        }
    };
    configScript.onerror = () => console.error('❌ Loader: Failed to load config.js');
    document.head.appendChild(configScript);

})();
