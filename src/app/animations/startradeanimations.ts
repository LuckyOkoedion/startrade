import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// ROTATION ANIMATIONS

export const smoothRotate = trigger('smooth-rotate', [
    state('no-rotation', style({ transform: 'rotate(0deg)' })),
    state('rotation', style({ transform: 'rotate(360deg)' })),

    transition('no-rotation => rotation', [
        animate('1s ease-in', keyframes([
            style({ transform: 'rotate(-15deg)', offset: 0 }),
            style({ transform: 'rotate(0deg)', offset: 0.05 }),
            style({ transform: 'rotate(360deg)', offset: 1.0 })
        ]))
    ]),
    transition('rotation => no-rotation', animate('1s ease-in', keyframes([
        style({ transform: 'rotate(345deg)', offset: 0 }),
        style({ transform: 'rotate(360deg)', offset: 0.05 }),
        style({ transform: 'rotate(0deg)', offset: 1.0 })
    ])))

])

export const normalRotate = trigger('rotatedState', [
    state('default', style({ transform: 'rotate(0)' })),
    state('rotated', style({ transform: 'rotate(-360deg)' })),
    transition('rotated => default', animate('2000ms ease-out')),
    transition('default => rotated', animate('2000ms ease-in'))
])


//FADE IN ANIMATIONS

export const halfSecondFadeIn = trigger('halfSecondFadeIn', [
    state('hidden', style({ opacity: 0 })),
    state('shown', style({ opacity: 1 })),
    transition('hidden => shown', animate('500ms ease-in'))

])

export const oneSecondFadeIn = trigger('oneSecondFadeIn', [
    state('hidden', style({ opacity: 0 })),
    state('shown', style({ opacity: 1 })),
    transition('hidden => shown', animate('1000ms ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0, offset: 0.5 }),
        style({ opacity: 1, offset: 1 })
    ])))

])

export const oneAndHalfSecondFadeIn = trigger('oneAndHalfSecondFadeIn', [
    state('hidden', style({ opacity: 0 })),
    state('shown', style({ opacity: 1 })),
    transition('hidden => shown', animate('1500ms ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0, offset: 0.67 }),
        style({ opacity: 1, offset: 1 })
    ])))

])

export const twoSecondFadeIn = trigger('twoSecondFadeIn', [
    state('hidden', style({ opacity: 0 })),
    state('shown', style({ opacity: 1 })),
    transition('hidden => shown', animate('2000ms ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0, offset: 0.75 }),
        style({ opacity: 1, offset: 1 })
    ])))

])



