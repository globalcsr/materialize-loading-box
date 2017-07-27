(function () {
    'use strict';

    class LoadingBox{

        static get defaults(){
            return {
                position: 'middle',
                size: 'medium', // material default size: medium
                type: 'circular',
                color: 'blue',
                colors: ['blue', 'red', 'yellow', 'green'],
                progress: 1,
                closeOnFinishProgress: false
            };
        }

        static typeCircular(options){

            let preloaderWrapper = document.createElement('div');
            preloaderWrapper.classList.add('preloader-wrapper');
            preloaderWrapper.classList.add(options.size);
            preloaderWrapper.classList.add('active');

            //we apply spinner-<color>-only class
            let only = '';
            if (options.color != 'flashing'){
                options.colors = [];
                options.colors[0] = options.color;
                only = '-only'
            }
            for (let c in options.colors){
                let spinnerLayer = document.createElement('div');
                spinnerLayer.classList.add('spinner-layer');
                spinnerLayer.classList.add('spinner-'+options.colors[c]+only);
                let clipperLeft = document.createElement('div');
                clipperLeft.classList.add('circle-clipper');
                clipperLeft.classList.add('left');
                let clipperRight = document.createElement('div');
                clipperRight.classList.add('circle-clipper');
                clipperRight.classList.add('right');
                let gapPatch = document.createElement('div');
                gapPatch.classList.add('gap-patch');
                let circle1 = document.createElement('div');
                circle1.classList.add('circle');
                let circle2 = document.createElement('div');
                circle2.classList.add('circle');
                let circle3 = document.createElement('div');
                circle3.classList.add('circle');

                clipperLeft.appendChild(circle1);
                gapPatch.appendChild(circle2);
                clipperRight.appendChild(circle3);
                spinnerLayer.appendChild(clipperLeft);
                spinnerLayer.appendChild(gapPatch);
                spinnerLayer.appendChild(clipperRight);
                preloaderWrapper.appendChild(spinnerLayer);
            }

            return preloaderWrapper;
        }

        static typeLinear(options){
            let progress = document.createElement("div");
            progress.classList.add('progress');
            let element = document.createElement("div");
            if (options.type=='indeterminate') {
                element.classList.add('indeterminate');
            }else {
                element.classList.add('determinate');
                element.style= 'width: ' + options.progress + '%';
                element.setAttribute('id', 'loading-progress');
            }
            element.classList.add(options.color);
            progress.appendChild(element);
            return progress;
        }

        static open(message, options){

            // if the element is already in the document, just we replace
            // the message
            if (document.getElementById('loading-box')!=null){
                return;
            }

            // extend default options
            options = LoadingBox.join(LoadingBox.defaults, options);
            LoadingBox._currentOptions = options;

            let box = document.createElement('div');
            box.setAttribute('id', 'loading-box');
            box.classList.add('card');
            box.classList.add(options.position);
            let boxContent = document.createElement('div');
            boxContent.classList.add('card-content');
            let preloader;
            if (options.type=='determinate' || options.type=='indeterminate'){
                preloader = LoadingBox.typeLinear(options);
            }else {
                preloader = LoadingBox.typeCircular(options);
            }
            let text = document.createElement('p');
            text.setAttribute('id', 'loading-text');
            text.textContent=message;
            boxContent.appendChild(preloader);
            boxContent.appendChild(text);
            box.appendChild(boxContent);
            document.getElementsByTagName('body')[0]
                .appendChild(box);
        }

        static close(){
            if (document.getElementById('loading-box')){
                document.getElementById('loading-box').outerHTML = "";
            }
        }

        static updateText(message){
            if (document.getElementById('loading-box')!=null){
                document.getElementById('loading-text').textContent=message;
            }
        }

        static updateProgress(progress){
            if (LoadingBox._currentOptions.type=='determinate'){
                document.getElementById('loading-progress')
                    .style='width: ' + progress + '%';

                if (LoadingBox._currentOptions.closeOnFinishProgress
                        & progress>=100){
                    LoadingBox.close();
                }
            }
        }

        static join(l1, l2){
            for (let key in l2){
                l1[key] = l2[key];
            }
            return l1;
        }
    }

    LoadingBox._box = null;
    LoadingBox._currentOptions = LoadingBox.defaults;
    window.Materialize.LoadingBox = LoadingBox;

})();
