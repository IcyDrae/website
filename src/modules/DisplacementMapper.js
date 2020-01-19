export default class DisplacementMapper {
    constructor(x) {
        this.x = x
    }

    var renderer            = new PIXI.autoDetectRenderer();
    var stage               = new PIXI.Container();
    var slidesContainer     = new PIXI.Container();
    var displacementSprite  = new PIXI.Sprite.fromImage( displacementImage );
    var displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );

    // Add canvas to the HTML
    document.body.appendChild( renderer.view );

    // Add child container to the stage
    stage.addChild( slidesContainer );

    // Set the filter to stage
    stage.filters = [displacementFilter];        

    // We load the sprites to the slides container and position them at the center of the stage
    // The sprites array is passed to our component upon its initialization
    // If our slide has text, we add it as a child to the image and center it
    function loadPixiSprites( sprites ) {
    
    for ( var i = 0; i < sprites.length; i++ ) {
        
        var texture = new PIXI.Texture.fromImage( sprites[i] );
        var image   = new PIXI.Sprite( texture );

        if ( texts ) {

        // Base styles for our Text
        var textStyle = new PIXI.TextStyle({
            fill: '#ffffff', 
            wordWrap: true,
            wordWrapWidth: 400
        });

        var text = new PIXI.Text( texts[i], textStyle);
        image.addChild( text );
        
        // Center each to text to the image
        text.anchor.set(0.5);
        text.x = image.width / 2;
        text.y = image.height / 2;      
                
        }
        
        image.anchor.set(0.5);
        image.x = renderer.width / 2;
        image.y = renderer.height / 2;            

        slidesContainer.addChild( image );
        
    } 
    
    }
}