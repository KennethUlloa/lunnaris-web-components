import json, re
from sys import argv
def render_template(template:str, data = {}, isPath=True):
    '''
    It uses a dict with the values to be rendered with the syntax:
    In template: &{ variable_name }& 
    In dictionary:
            {
                'variable_name': value
            } 
    Spaces between opening and closing braces are mandatory. If you put in your template
    &{variable_name}& it won't be parsed so in the rendered file it will appear as it is.
    '''
    content = template
    if isPath:
        content = open(template,'r',encoding='utf-8').read()

    for value in data:
        content = content.replace("&{ "+value+" }&", str(data[value]))
    return content

def css_min(file:str, args: dict):
    return file.replace("\n","")

def js_min(file:str, args: dict):
    #imports
    if args == None:
        args = {"mode":"basic"}
    
    mode = args["mode"]

    content = re.sub("import( )*({.*})( )*from( )*(\".*\"|'.*')( )*;?",'',file)
    content = re.sub("((?!.*(\"|'|`)))\/\/.*","", content)
    content = content.replace("\t"," ");
    if mode == "dmf":
        content = content.replace("export","")
    #line comments
    return content

def parse(file:str, args:dict):
    new = {}
    for a in args.keys():
        new[a] = open(args[a],'r',encoding='utf-8').read()
    return render_template(file, new, False)

def get_step(file:str, type:str):
    if file.endswith(".css"):
        if type == "min":
            return css_min
        
    if file.endswith(".js"):
        if type == "min":
            return js_min
        
        elif type == "parse":
            return parse
    
        


ex = {
    "file":"icons/lunnaris-icons-dev.js",
    "pipeline":[
    {"type":"min"},
    {"type":"parse", 
    "args":{
        "back":"img/back.svg",
        "expand":"img/expand.svg",
        "minimize":"img/minimize.svg",
        "mute":"img/mute.svg",
        "play":"img/play.svg",
        "pause":"img/pause.svg",
        "volume":"img/volume.svg"
    }}]}

def process_file(file_entry):
    #read the file
    file = file_entry["file"]
    content = open(file,'r',encoding='utf-8').read()
    #read the pileline
    pipeline = file_entry["pipeline"]
    #for each step
    for step in pipeline:
        #read the type
        pipeline_step = get_step(file, step["type"])
        #read the args
        pipeline_step_arguments = step["args"] if "args" in step.keys() else None
        #update the content
        content = pipeline_step(content, pipeline_step_arguments)

    return content


if __name__ == "__main__":

    config = "output.json"
    if len(argv) >= 2:
        config = argv[1]

    output = json.load(open(config,'r',encoding='utf-8'))

    css = ''
    js = ''

    for file in output["files"]:
        temp_content = process_file(file)
        if file["file"].endswith(".css"):
            css += temp_content
        elif file["file"].endswith(".js"):
            js += temp_content

    with open(output["css"],"w",encoding="utf-8") as f:
        f.write(css)

    with open(output["js"],"w",encoding="utf-8") as f:
        f.write(js)
