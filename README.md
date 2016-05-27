'use strict';

/**
 * App Main Module
 *
 */

import ThreeRender from './base'

class Animation extends ThreeRender {

    constructor( args ) {
        super( args )
        
        this.init();
    }

    init() {
        this.onFrame();
    }

    onFrame() {
        requestAnimationFrame( this.onFrame.bind(this) );

        super.render();
    }

};

window.onload = () => new Animation({
    color: 0x0000ff
});