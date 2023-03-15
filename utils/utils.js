export const decimalFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2
});

export function loadIcons(name) {
    var _content = createElement('div');
    fetch(`img/${name}`).
    then(response => response.text())
    .then(icon => {
        //console.log(icon);
        _content.innerHTML = icon;
    }).catch(reason => console.log('error'));
    return _content;
}

export function createElement(tag, className=null, type=null) {
    var element = document.createElement(tag);
    if(className !== null){
        element.className = className;
    }
    
    if(type !== null){
        element.type = type;
    }
    return element;
}

export function createIconButton(icon, className=null){
    var button = createElement('button', className);
    fetch(`img/${icon}`).
    then(response => response.text())
    .then(icon => {
        button.innerHTML = icon;
    }).catch(error =>{
        var img = createElement('img');
        img.src = `img/${icon}`;
        button.appendChild(img);
    });
    
    return button;
}

export function formatTime(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    if (hours === 0){
        return `${minutes}:${decimalFormatter.format(seconds)}`
    }else{
        return `${hours}:${decimalFormatter.format(minutes)}:${decimalFormatter.format(seconds)}`
    }
}