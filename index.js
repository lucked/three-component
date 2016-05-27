'use strict';

/**
 * App Main Module
 *
 */

import THREE from 'three'

window.THREE = window.THREE || THREE

export default class ThreeRender {

    constructor({ selector = null, transparent = false, alpha = 1.0, color = 0x111111 }) {

        if ( selector ) {
            this.container = this.getContainer(this.selector);
            this.w = this.container.clientWidth
            this.h = this.container.clientHeight
        } else {
            this.w = window.innerWidth
            this.h = window.innerHeight
        }

        this.transparent = transparent;
        this.alpha       = alpha;
        this.color       = color;

        this.setAll();
    }

    getContainer( selector ) {
        var div = document.querySelector( selector );

        if ( !div ) throw new Error('Three.js: selector not valid')

        return div;
    }

    setAll() {
        this.setRenderer();
        this.setScene();
        this.render();
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({ alpha: this.transparent, autoResize: true });
        
        // Improve perfomance on small devices 
        this.ratio = window.innerWidth <= 768 && window.devicePixelRatio > 1 ? 1.8 : window.devicePixelRatio ;

        this.renderer.setPixelRatio( this.ratio );

        this.renderer.setSize( this.w, this.h );
        this.renderer.setClearColor( this.color, this.alpha );

        if ( this.container ) {
            this.container.appendChild( this.renderer.domElement );
        } else {
            document.body.appendChild( this.renderer.domElement );
        }
    }

    setScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 
            75,
            this.w / this.h,
            0.1,
            1000 
        );
    
        this.camera.lookAt( this.scene.position );
        this.camera.zoom = 1;
        this.camera.updateProjectionMatrix();
        
        this.camera.position.y = 0;
        this.camera.position.x = 0;
        this.camera.position.z = 10;

        this.renderer.render( this.scene, this.camera );
    }

    render() {
        this.renderer.render( this.scene, this.camera );
    }

}