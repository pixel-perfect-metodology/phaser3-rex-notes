import * as Phaser from 'phaser';

type DirTypes = 0 | 1 | 2 | 3 | 'up&down' | 'left&right' | '4dir' | '8dir';

export interface IConfig {
    x?: number, y?: number,
    radius?: number,

    base?: Phaser.GameObjects.GameObject,
    thumb?: Phaser.GameObjects.GameObject,
    dir?: DirTypes,

    forceMin?: number,
    fixed?: boolean,
    enable?: boolean,
}
export default class VirtualJoyStick {
    constructor(
        scene: Phaser.Scene,
        config?: IConfig
    )

    createCursorKeys(): {
        up: Phaser.Input.Keyboard.Key,
        down: Phaser.Input.Keyboard.Key,
        left: Phaser.Input.Keyboard.Key,
        right: Phaser.Input.Keyboard.Key,
    };

    destroy(): void;

    setEnable(enable?: boolean): this;
    toggleEnable(): this;
    enable: boolean;

    setVisible(visible?: boolean): this;
    toggleVisible(): this;
    visible: boolean;

    setPosition(x: number, y: number): this;
    x: number;
    y: number;

    setScrollFactor(factor: number): this;

    base: Phaser.GameObjects.GameObject;
    thumb: Phaser.GameObjects.GameObject;

    readonly left: boolean;
    readonly right: boolean;
    readonly up: boolean;
    readonly down: boolean;
    readonly nokey: boolean;
    readonly force: number;
    readonly forceX: number;
    readonly forceY: number;
    readonly angle: number;
    readonly rotation: number;
    readonly pointerX: number;
    readonly pointerY: number;
    readonly pointer: Phaser.Input.Pointer;
}