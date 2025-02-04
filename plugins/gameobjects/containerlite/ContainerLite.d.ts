// import * as Phaser from 'phaser';
export default ContainerLite;

declare namespace ContainerLite {
    interface ILocalState {
        parent: ContainerLite,
        self: Phaser.GameObjects.GameObject,

        x: number, y: number,
        rotation: number, angle: number,
        scaleX: number, scaleY: number, displayWidth: number, displayHeight: number,
        alpha: number,
        visible: boolean,
        active: boolean,
    }
}

declare class ContainerLite extends Phaser.GameObjects.Zone {
    isRexContainerLite: true;

    constructor(
        scene: Phaser.Scene,
        x?: number, y?: number,
        width?: number, height?: number,
        children?: Phaser.GameObjects.GameObject[]
    );

    add(
        child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[]
    ): this;

    addMultiple(
        children: Phaser.GameObjects.GameObject[]
    ): this;

    addLocal(
        child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[]
    ): this;

    addLocalMultiple(
        children: Phaser.GameObjects.GameObject[]
    ): this;

    remove(
        gameObject: Phaser.GameObjects.GameObject,
        destroyChild?: boolean
    ): this;

    clear(
        destroyChild?: boolean
    ): this;

    setChildPosition(
        child: Phaser.GameObjects.GameObject,
        x: number,
        y: number
    ): this;

    setChildLocalPosition(
        child: Phaser.GameObjects.GameObject,
        x: number,
        y: number
    ): this;

    setChildRotation(
        child: Phaser.GameObjects.GameObject,
        rotation: number
    ): this;

    setChildAngle(
        child: Phaser.GameObjects.GameObject,
        angle: number
    ): this;

    setChildScale(
        child: Phaser.GameObjects.GameObject,
        scaleX: number,
        scaleY: number
    ): this;

    setChildLocalScale(
        child: Phaser.GameObjects.GameObject,
        scaleX: number,
        scaleY: number
    ): this;

    setChildDisplaySize(
        child: Phaser.GameObjects.GameObject,
        width: number,
        height: number
    ): this;

    setChildVisible(
        child: Phaser.GameObjects.GameObject,
        visible: boolean
    ): this;

    setChildAlpha(
        child: Phaser.GameObjects.GameObject,
        alpha: number
    ): this;

    setChildLocalAlpha(
        child: Phaser.GameObjects.GameObject,
        alpha: number
    ): this;

    resetChildState(
        child: Phaser.GameObjects.GameObject
    ): this;

    resetChildPositionState(
        child: Phaser.GameObjects.GameObject
    ): this;

    resetChildRotationState(
        child: Phaser.GameObjects.GameObject
    ): this;

    resetChildScaleState(
        child: Phaser.GameObjects.GameObject
    ): this;

    resetChildAlphaState(
        child: Phaser.GameObjects.GameObject
    ): this;

    resetChildVisibleState(
        child: Phaser.GameObjects.GameObject
    ): this;

    resetChildActiveState(
        child: Phaser.GameObjects.GameObject
    ): this;

    tween(
        config: Phaser.Types.Tweens.TweenBuilderConfig | object
    ): Phaser.Tweens.Tween

    tweenChild(
        config: Phaser.Types.Tweens.TweenBuilderConfig | object
    ): Phaser.Tweens.Tween

    getChildren(
        out?: Phaser.GameObjects.GameObject[]
    ): Phaser.GameObjects.GameObject[];

    getAllChildren(
        out?: Phaser.GameObjects.GameObject[]
    ): Phaser.GameObjects.GameObject[];

    getAllVisibleChildren(
        out?: Phaser.GameObjects.GameObject[]
    ): Phaser.GameObjects.GameObject[];

    contains(
        gameObject: Phaser.GameObjects.GameObject
    ): boolean;

    getByName(
        name: string,
        recursive?: boolean
    ): Phaser.GameObjects.GameObject;

    getRandom(): Phaser.GameObjects.GameObject;

    getFirst(
        property: string,
        value?: unknown,
        startIndex?: number,
        endIndex?: number
    ): Phaser.GameObjects.GameObject;

    getAll(
        property: string,
        value?: unknown,
        startIndex?: number,
        endIndex?: number
    ): Phaser.GameObjects.GameObject;

    count(
        property: string,
        value?: unknown,
        startIndex?: number,
        endIndex?: number
    ): this;

    swap(
        child1: Phaser.GameObjects.GameObject,
        child2: Phaser.GameObjects.GameObject
    ): number;

    setAll(
        property: string,
        value?: unknown,
        startIndex?: number,
        endIndex?: number
    ): this;

    setDepth(
        value: number,
        containerOnly?: boolean
    ): this;

    swapDepth(
        containerB: ContainerLite
    ): this;

    incDepth(
        inc: number
    ): this;

    moveDepthBelow(
        gameObject: Phaser.GameObjects.GameObject
    ): this;

    moveDepthAbove(
        gameObject: Phaser.GameObjects.GameObject
    ): this;

    getParent(
        gameObject?: Phaser.GameObjects.GameObject
    ): ContainerLite;

    getTopmostParent(
        gameObject?: Phaser.GameObjects.GameObject
    ): ContainerLite;

    getLocalState(
        child: Phaser.GameObjects.GameObject
    ): ContainerLite.ILocalState;

    addToLayer(
        layer: Phaser.GameObjects.Layer
    ): this;

    addToContainer(
        container: Phaser.GameObjects.Container
    ): this;

    changeOrigin(
        originX: number,
        originY: number
    ): this;


    // Components
    clearAlpha(): this;
    setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;
    alpha: number;
    alphaTopLeft: number;
    alphaTopRight: number;
    alphaBottomLeft: number;
    alphaBottomRight: number;


    toggleFlipX(): this;
    toggleFlipY(): this;
    setFlipX(value: boolean): this;
    setFlipY(value: boolean): this;
    setFlip(x: boolean, y: boolean): this;
    resetFlip(): this;

}