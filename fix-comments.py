import re

content = open('app/page.js', 'r').read()

def replace_comment(match):
    comment_text = match.group(1)
    return f"{{/* {comment_text} */}}"

content = re.sub(r'<!--(.*?)-->', replace_comment, content, flags=re.DOTALL)

with open('app/page.js', 'w') as f:
    f.write(content)

