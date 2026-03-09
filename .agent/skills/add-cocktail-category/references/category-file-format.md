# Category File Format

Use this pattern for `data/categories/<slug>.js`.

## Required wrapper

```javascript
// Category: CV
if (typeof window.registerCocktails === 'function') {
  window.registerCocktails('CV', [
    {
      "id": "example-id-123abc",
      "name": "Example Cocktail",
      "category": "CV",
      "method": "Shake",
      "glass": "Nick&Nora",
      "ice": "No ice",
      "garnish": "Lemon twist",
      "ingredients": [
        {
          "name": "Spirit",
          "qty": "30ml"
        }
      ]
    }
  ]);
} else {
  window.pendingCocktails = window.pendingCocktails || [];
  window.pendingCocktails.push({
    category: 'CV',
    data: [
      {
        "id": "example-id-123abc",
        "name": "Example Cocktail",
        "category": "CV",
        "method": "Shake",
        "glass": "Nick&Nora",
        "ice": "No ice",
        "garnish": "Lemon twist",
        "ingredients": [
          {
            "name": "Spirit",
            "qty": "30ml"
          }
        ]
      }
    ]
  });
}
```

## Checklist

- File lives in `data/categories/`
- Exactly one category per file
- Wrapper includes both `registerCocktails` and `pendingCocktails`
- Category string is consistent across all objects
- `python auto_config.py` has been run
- `npm run check:ids` passes
