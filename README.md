
# How to

    ES6

    $ npm install three-component --save
    

```
import ThreeComponent from 'three-component'

class App extends ThreeComponent {

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

new App({
    selector: "#container",
    transparent: true,
    color: 0x0000ff,
    alpha: 0.4,
});
```
