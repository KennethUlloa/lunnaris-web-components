export const decimalFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2
});

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
export function formatTime(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    if (hours === 0){
        return `${minutes}:${decimalFormatter.format(seconds)}`;
    }else{
        return `${hours}:${decimalFormatter.format(minutes)}:${decimalFormatter.format(seconds)}`;
    }
}