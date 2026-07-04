#!/usr/bin/env python3
"""Inject docusaurus-override.css and eventmesh-internal.js into all Docusaurus HTML pages.
Updates cache-busting version parameter to force browser reload.
"""
import os
import re
import sys
from pathlib import Path

SITE_ROOT = Path(__file__).parent
OLD_CSS_VERSION = '20260704m'
OLD_JS_VERSION = '20260704m'
NEW_VERSION = '20260704n'

# Files to inject
CSS_FILE = '/assets/css/docusaurus-override.css'
JS_FILE = '/assets/js/eventmesh-internal.js'

# Theme init script (must be before any Docusaurus JS)
THEME_INIT = '''<script>!function(){var h=document.documentElement,t=localStorage.getItem("eventmesh-theme")||"dark";h.setAttribute("data-theme",t);}();</script>'''

css_inject = f'<link rel="stylesheet" href="{CSS_FILE}?v={NEW_VERSION}" data-em-override="true">'
js_inject = f'<script src="{JS_FILE}?v={NEW_VERSION}" data-em-override="true"></script>'

def is_docusaurus_page(content):
    """Check if this is a Docusaurus page with navbar."""
    return 'class="navbar' in content or 'navbar__inner' in content

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if not is_docusaurus_page(content):
        return False, "not a docusaurus page"

    modified = False

    # 1. Update CSS link version
    # Find old CSS link and replace version
    old_css = f'{CSS_FILE}?v={OLD_CSS_VERSION}'
    if old_css in content:
        content = content.replace(old_css, f'{CSS_FILE}?v={NEW_VERSION}')
        modified = True
    else:
        # CSS link exists but with different/no version — update it
        # Find <link rel="stylesheet" href="/assets/css/docusaurus-override.css" ...>
        css_pattern = re.compile(
            r'<link\s+rel="stylesheet"\s+href="/assets/css/docusaurus-override\.css(?:\?v=[^"]+)?"(\s+data-em-override="true")?\s*/?>'
        )
        match = css_pattern.search(content)
        if match:
            content = content[:match.start()] + css_inject + content[match.end():]
            modified = True
        else:
            # Inject CSS after the existing styles.4f054d44.css link
            styles_match = re.search(r'<link\s+rel="stylesheet"\s+href="/assets/css/styles\.[a-f0-9]+\.css"[^>]*>', content)
            if styles_match:
                insert_pos = styles_match.end()
                content = content[:insert_pos] + '\n' + css_inject + content[insert_pos:]
                modified = True

    # 2. Update JS script version
    old_js = f'{JS_FILE}?v={OLD_JS_VERSION}'
    if old_js in content:
        content = content.replace(old_js, f'{JS_FILE}?v={NEW_VERSION}')
        modified = True
    else:
        # JS script exists with different/no version
        js_pattern = re.compile(
            r'<script\s+src="/assets/js/eventmesh-internal\.js(?:\?v=[^"]+)?"(\s+data-em-override="true")?\s*></script>'
        )
        match = js_pattern.search(content)
        if match:
            content = content[:match.start()] + js_inject + content[match.end():]
            modified = True
        else:
            # Inject JS before </body>
            body_close = content.rfind('</body>')
            if body_close > 0:
                content = content[:body_close] + js_inject + '\n' + content[body_close:]
                modified = True

    # 3. Inject anti-logo-flash inline style right after <head> — absolute first CSS rule.
    # This prevents the old Docusaurus logo.png from flashing during SPA navigation,
    # before any external stylesheet is parsed. The html prefix + !important give max specificity.
    ANTI_FLASH_STYLE = '<style data-em-anti-flash>html .navbar__logo,html .navbar__logo img{display:none!important;visibility:hidden!important;width:0!important;height:0!important;overflow:hidden!important;position:absolute!important;pointer-events:none!important}</style>'
    anti_flash_present = 'data-em-anti-flash' in content
    if not anti_flash_present:
        head_close = content.find('<head>')
        if head_close > 0:
            insert_pos = head_close + len('<head>')
            content = content[:insert_pos] + '\n' + ANTI_FLASH_STYLE + content[insert_pos:]
            modified = True

    # 4. Ensure theme init script is before any Docusaurus scripts in <head>
    # Check if already has our theme init
    theme_init_present = 'localStorage.getItem("eventmesh-theme")' in content
    if not theme_init_present:
        # Find the Docusaurus theme script that sets dark:
        docusaurus_theme = 'data-theme","dark");h.classList.add("dark")'
        if docusaurus_theme in content:
            # Insert our theme init BEFORE the Docusaurus one
            idx = content.find(docusaurus_theme)
            # Find the start of this script tag
            script_start = content.rfind('<script>!function', 0, idx)
            if script_start > 0:
                content = content[:script_start] + THEME_INIT + '\n' + content[script_start:]
                modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True, "updated"
    return False, "no changes needed"

def main():
    html_files = list(SITE_ROOT.rglob('*.html'))
    # Filter out index.html and zh/index.html (hand handled separately)
    exclude = {
        SITE_ROOT / 'index.html',
        SITE_ROOT / 'zh' / 'index.html',
    }
    html_files = [f for f in html_files if f not in exclude]

    print(f"Found {len(html_files)} HTML files to process...")

    updated = 0
    skipped = 0
    for f in sorted(html_files):
        result, msg = process_file(f)
        if result:
            updated += 1
            print(f"  [OK] {f.relative_to(SITE_ROOT)}")
        else:
            skipped += 1

    print(f"\nDone! Updated: {updated}, Skipped: {skipped}")

if __name__ == '__main__':
    main()
