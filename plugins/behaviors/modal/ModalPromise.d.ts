import ModalBehavior from './Modal';

export function Modal(
    gameObject: Phaser.GameObjects.GameObject,
    config?: ModalBehavior.IConfig
): ModalBehavior;

export function ModalPromise(
    gameObject: Phaser.GameObjects.GameObject,
    config?: ModalBehavior.IConfig
): Promise<Phaser.GameObjects.GameObject>