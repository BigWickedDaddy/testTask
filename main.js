var array = [6, 2, 3, 1, 7, 4, 8, 5]

Sort(array);

alert(array)

DrawArray(array)

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}

function Sort(array) {
    let task = false;
    while (!task) {
        task = true;
        
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                task = false;
                let val = array[i - 1];
                array[i - 1] = array[i];
                array[i] = val;
            }
        }
        
    }
    return array;
}



