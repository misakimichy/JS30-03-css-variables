
// Pass event and use 'event.currentTarget' instead of 'this' because of the arrow function.
const handleUpdate = event => {
    // the empty string is for color value.
    const dataSizing = event.currentTarget.dataset.sizing || '';
    document.documentElement.style.setProperty(`--base-${event.currentTarget.name}`, event.currentTarget.value + dataSizing);
    switch(event.currentTarget.name) {
        case 'padding' :
            document.getElementById('show-padding').innerHTML = event.currentTarget.value;
            break;
        case 'blur' :
            document.getElementById('show-blur').innerHTML = event.currentTarget.value;
            break;
        case 'brightness' :
            document.getElementById('show-brightness').innerHTML = event.currentTarget.value;
            break;
        case 'opacity' :
            document.getElementById('show-opacity').innerHTML = event.currentTarget.value;
            break;
        case 'color' :
            document.getElementById('show-color').innerHTML = event.currentTarget.value;
    }
};

(function() {
    const inputs = document.querySelectorAll('.container input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}());