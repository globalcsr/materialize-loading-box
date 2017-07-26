function demoCircular() {
    hide()
    Materialize.LoadingBox.open('Loading message...');
}

function demoCircularFlashing() {
    hide()
    Materialize.LoadingBox.open('Loading message...', {color:'flashing'});
}

function demoDeterminate() {
    hide()
    Materialize.LoadingBox.open(
        'Loading message...',
        {
            type: 'determinate',
            progress: 50
        }
    );
}

function demoDeterminateUpdate() {
    hide()
    var x = 1;
    Materialize.LoadingBox.open(
        'Loading message...',
        {
            type: 'determinate',
            progress: x++,
            closeOnFinishProgress: true
        }
    );
    setInterval(
        function () {
            if (x <= 100) {
                Materialize.LoadingBox.updateProgress(x++);
            }
        },
        100
    );
}

function demoIndeterminate() {
    hide()
    Materialize.LoadingBox.open('Loading elements...', {type:'indeterminate'});
}

function hide() {
    Materialize.LoadingBox.close();
}
