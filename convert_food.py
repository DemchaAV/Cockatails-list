import json
import re
import os

# Read source JSON
with open(r'C:\Users\Demch\Downloads\scotts_food_bible_structured.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

items = []
for idx, item in enumerate(data['items']):
    # Generate ID
    name = item.get('name', '').replace(',', '').strip()
    item_id = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-') + str(idx)
    
    # Helper to get field items
    def get_field(field_name):
        if 'fields' not in item or field_name not in item['fields']:
            return None
        field_items = item['fields'][field_name].get('items', [])
        if not field_items:
            return None
        return ' '.join(field_items)
    
    # Get wine suggestion as object
    wine = None
    if 'fields' in item and 'Wine Suggestion' in item['fields']:
        wine_items = item['fields']['Wine Suggestion'].get('items', [])
        if wine_items and len(wine_items) >= 1:
            wine = {
                'name': wine_items[0],
                'notes': ' '.join(wine_items[1:]) if len(wine_items) > 1 else ''
            }
    
    food_item = {
        'id': item_id,
        'name': name,
        'subtitle': item.get('subtitle', ''),
        'category': item.get('category', 'Other'),
        'description': get_field('Description'),
        'wineSuggestion': wine,
        'glossary': get_field('Glossary'),
        'additionalNotes': get_field('Additional Notes'),
        'allergens': get_field('Allergens'),
        'kitchenMep': get_field('Kitchen MEP'),
        'serviceMep': get_field('Service MEP')
    }
    items.append(food_item)

# Create output directory if not exists
output_dir = r'C:\Users\Demch\OneDrive\projects\Food-list\data\categories'
os.makedirs(output_dir, exist_ok=True)

# Write JavaScript file
output = 'window.registerFoodCategory(' + json.dumps(items, indent=2, ensure_ascii=False) + ');'
with open(os.path.join(output_dir, 'scotts.js'), 'w', encoding='utf-8') as f:
    f.write(output)

print(f'Converted {len(items)} food items')
