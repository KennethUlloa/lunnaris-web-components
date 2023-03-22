import re, json
from sys import argv

#cwd = os.getcwd()


def lastIndexOf(string: str, substring: str):
    index = string[::-1].find(substring[::-1])
    if index < 0:
        return -1
    return len(string) - (index + len(substring))


def read(file):
    content = open(file, 'r', encoding='UTF-8').read()
    return content

def minifyJS(file):
    #imports
    content = re.sub("import( )*({.*})( )*from( )*(\".*\"|'.*')( )*;?",'',read(file))
    #line comments
    content = re.sub("(\/\/)(.*)\n","", content)
    
    return content.replace("\n"," ")

def minify(min_file, output_css = None, output_js = None):
    lists = open(min_file,'r').read().split("\n")
    css = ''
    js = ''

    for f in lists:
        if f.endswith("css"):
            css += read(f).replace("\n","")
        elif f.endswith("js"):
            js += minifyJS(f)

    if output_css != None:
        with open(output_css,'w', encoding='UTF-8') as f:
            f.write(css)
            f.close()

    if output_js != None:
        with open(output_js,'w', encoding='UTF-8') as f:
            f.write(js)
            f.close()

if __name__ == "__main__":
    root = argv[1] if len(argv) >= 2 else './output.json'
    conf = json.load(open(root))
    minify(root+'/min-index.txt',root + '/' + conf['css'], root + '/' + conf['js'])

