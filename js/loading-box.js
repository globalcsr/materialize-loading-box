(function () {
    'use strict';

    class LoadingBox{

        static get defaults(){
            return {
                type: 'circle',
                color: 'blue'
            };
        }

        static typeCircle(options){

            let preloaderWrapper = document.createElement('div');
            preloaderWrapper.classList.add('preloader-wrapper');
            preloaderWrapper.classList.add('big');
            preloaderWrapper.classList.add('active');
            let spinnerLayer = document.createElement('div');
            spinnerLayer.classList.add('spinner-layer');
            spinnerLayer.classList.add('spinner-'+options.color+'-only');
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

            return preloaderWrapper;
        }

        static get typeDeterminate(){

        }

        static open(message, options){

            // if the element is already in the document, just we replace
            // the message
            if (document.getElementById('loading-box')!=null){
                return;
            }

            // extend default options
            options = LoadingBox.join(LoadingBox.defaults, options);

            let box = document.createElement('div');
            box.setAttribute('id', 'loading-box');
            box.classList.add('card');
            let boxContent = document.createElement('div');
            boxContent.classList.add('card-content');
            let preloader = LoadingBox.typeCircle(options);
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
            document.getElementById('loading-box').outerHTML = "";
        }

        static updateText(message){
            if (document.getElementById('loading-box')!=null){
                document.getElementById('loading-text').textContent=message;
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
    window.Materialize.LoadingBox = LoadingBox;

})();
