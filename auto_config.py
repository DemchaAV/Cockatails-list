import os


# Paths relative to the script location
CATEGORIES_DIR = os.path.join('data', 'categories')
CONFIG_FILE = os.path.join('data', 'config.js')

def get_category_files():
    """Returns a sorted list of .js files in the categories directory."""
    if not os.path.exists(CATEGORIES_DIR):
        print(f"❌ Error: Directory '{CATEGORIES_DIR}' not found.")
        return []
        
    files = [f for f in os.listdir(CATEGORIES_DIR) if f.endswith('.js')]
    return sorted(files)

def update_config(files):
    """Writes the list of files to config.js in the correct format."""
    # Create the JS content
    js_lines = [f'    "{f}"' for f in files]
    files_block = ',\n'.join(js_lines)
    
    content = f"""window.cocktailConfig = {{
    categories: [
{files_block}
    ]
}};
"""
    
    try:
        with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Updated {CONFIG_FILE} with {len(files)} categories: {', '.join(files)}")
    except Exception as e:
        print(f"❌ Failed to write config: {e}")

def main():
    print(f"👀 Checking '{CATEGORIES_DIR}' for categories...")
    
    current_files = get_category_files()
    
    if current_files:
        update_config(current_files)
    else:
        print("⚠️ No category files found.")
        
    print("✨ Done.")

if __name__ == "__main__":
    main()
