var refreshInterval = null;

function demoCircular() {
    hide()
    $('.circular-default').show();
    Materialize.LoadingBox.open('Loading message...');
}

function demoCircularFlashing() {
    hide()
    $('.circular-flashing').show();
    Materialize.LoadingBox.open('Loading message...', {color:'flashing'});
}

function demoDeterminate() {
    hide()
    clearInterval(refreshInterval);
    $('.determinate-default').show();
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
    clearInterval(refreshInterval);
    $('.determinate-update').show();
    var x = 1;
    Materialize.LoadingBox.open(
        'Loading...',
        {
            type: 'determinate',
            progress: x++,
            closeOnFinishProgress: true,
            position: 'top_right'
        }
    );
    refreshInterval = setInterval(
        function () {
            if (x <= 100) {
                Materialize.LoadingBox.updateText("loading... "+x+"%");
                Materialize.LoadingBox.updateProgress(x++);
            }
        },
        500
    );
}

function demoIndeterminate() {
    hide()
    clearInterval(refreshInterval);
    $('.indeterminate-default').show();
    Materialize.LoadingBox.open(
        'Loading elements...',
        {
            type:'indeterminate',
            color: 'red'
        }
    );
}

function hide() {
    $('#main-header').hide();
    $('.demo').hide();
    Materialize.LoadingBox.close();
}

function home() {
    hide();
    $('#main-header').show();
}

$(".button-collapse").sideNav();
