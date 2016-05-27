
# How to use

    $ npm install three-component --save
    

```
import ThreComponent from 'three-component'

class App extends ThreComponent {

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
    color: 0x0000ff
});
```
