import Carousel from '../carousel/Carousel.js';
import Image from '../image/Image.js';

const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
const GetValue = Phaser.Utils.Objects.GetValue;
const Wrap = Phaser.Math.Wrap;

class FourFacesImageCarousel extends Carousel {
    constructor(scene, x, y, config) {
        if (IsPlainObject(x)) {
            config = x;
            x = GetValue(config, 'x', 0);
            y = GetValue(config, 'y', 0);
        }

        if (config === undefined) {
            config = {};
        }

        var textureKeys = GetValue(config, 'images', undefined);
        if (textureKeys === undefined) {
            textureKeys = [];
        }

        // Create 4 faces using index0 texture
        var textureKey0 = textureKeys[0];
        var faces = [], image;
        for (var i = 0; i < 4; i++) {
            image = new Image(scene, 0, 0, textureKey0.key, textureKey0.frame, config);
            scene.add.existing(image);
            faces.push(image);
        }

        config.faces = faces;
        super(scene, x, y, config);
        this.type = 'rexFourFacesImageCarousel';

        this.textureKeys = textureKeys;
        this.repeat = GetValue(config, 'repeat', true);
        this.setIndex(GetValue(config, 'index', 0));
    }

    setIndex(index) {
        var totalKeys = this.textureKeys.length
        index = Wrap(index, 0, totalKeys);
        this.currentIndex = index;
        this.currentFaceIndex = index % 4;

        var textureKey, textureIndex, faceIndex;
        // Front face
        textureIndex = index;
        textureKey = this.textureKeys[textureIndex];
        faceIndex = this.currentFaceIndex;
        this.faces[faceIndex].setTexture(textureKey.key, textureKey.frame);
        // Back face, equal tp fron face
        faceIndex = Wrap(this.currentFaceIndex + 2, 0, 4);
        this.faces[faceIndex].setTexture(textureKey.key, textureKey.frame);

        // Right face (next)
        textureIndex = Wrap(index + 1, 0, totalKeys);
        textureKey = this.textureKeys[textureIndex];
        faceIndex = Wrap(this.currentFaceIndex - 1, 0, 4);
        this.faces[faceIndex].setTexture(textureKey.key, textureKey.frame);

        // Left face (previous)
        textureIndex = Wrap(index - 1, 0, totalKeys);
        textureKey = this.textureKeys[textureIndex];
        faceIndex = Wrap(this.currentFaceIndex + 1, 0, 4);
        this.faces[faceIndex].setTexture(textureKey.key, textureKey.frame);

        return this;
    }

    toNext(duration) {
        this.roll
            .once('complete', function () {
                this.setIndex(this.currentIndex + 1)
            }, this)
            .toPrevious(duration);

        return this;
    }

    toPrevious(duration) {
        this.roll
            .once('complete', function () {
                this.setIndex(this.currentIndex - 1)
            }, this)
            .toNext(duration);

        return this;
    }

}

export default FourFacesImageCarousel;