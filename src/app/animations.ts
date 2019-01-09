import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            // here we apply a style and use the animate function to apply the style over 0.3 seconds
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);
















export const slideInOutAnimation =
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);