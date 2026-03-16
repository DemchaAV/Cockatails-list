import re

with open(r'c:\Users\Demch\OneDrive\projects\Cockatails-list\data\categories\new_signature.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. glassware -> glass
text = re.sub(r'glassware:\s*', r'glass: ', text)

# 2. garnish objects -> strings
def repl_garnish(m):
    items = re.findall(r'name:\s*"([^"]+)"', m.group(1))
    if not items:
        return m.group(0)
    return 'garnish: "' + ' & '.join(items) + '"'

text = re.sub(r'garnish:\s*\[(.*?)\]', repl_garnish, text, flags=re.DOTALL)

# 3. ingredients quanties -> strings
def repl_ing(m):
    ing_text = m.group(1)
    
    def repl_qty(m2):
        name = m2.group(1)
        qty_str = m2.group(2)
        if qty_str == 'null':
            return f'name: "{name}", qty: "TBD"'
        try:
            q = float(qty_str)
            nl = name.lower()
            if 'bitter' in nl or 'tincture' in nl or 'foamer' in nl or 'solution' in nl or q <= 3:
                if 'solution' in nl or 'foamer' in nl:
                    suffix = ' pipette'
                else:
                    suffix = ' dashes' if q > 1 else ' dash'
                qs = str(int(q)) if q.is_integer() else str(q)
                return f'name: "{name}", qty: "{qs}{suffix}"'
            else:
                qs = str(int(q)) if q.is_integer() else str(q)
                return f'name: "{name}", qty: "{qs}ml"'
        except:
            return m2.group(0)
            
    ing_text = re.sub(r'name:\s*"([^"]+)",\s*qty:\s*([^}\s,]+)', repl_qty, ing_text)
    return 'ingredients: [' + ing_text + ']'

text = re.sub(r'ingredients:\s*\[(.*?)\]', repl_ing, text, flags=re.DOTALL)

# Remove totalQty
text = re.sub(r'\s*//.*?\n\s*totalQty:\s*[^,]+,\n', '\n', text, flags=re.DOTALL)
text = re.sub(r'\s*totalQty:\s*[^,]+,\n', '\n', text)

with open(r'c:\Users\Demch\OneDrive\projects\Cockatails-list\data\categories\new_signature.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Finished rewriting file")
