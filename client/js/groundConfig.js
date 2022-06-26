const groundConfig = {
    orientation: 'white',
    turnColor: 'black',
    coordinates: true,
    ranksPosition: 'right',
    autoCastle: true,
    viewOnly: false,
    disableContextMenu: false,
    addPieceZIndex: false,
    addDimensionsCssVars: false,
    blockTouchScroll: false,
    pieceKey: false,
    highlight: {
    lastMove: true,
    check: true,
    },
    animation: {
    enabled: true,
    duration: 200,
    },
    movable: {
    free: false,
    color: 'both',
    showDests: true,
    events: {},
    rookCastle: true,
    },
    premovable: {
    enabled: true,
    showDests: true,
    castle: true,
    events: {},
    },
    predroppable: {
    enabled: false,
    events: {},
    },
    draggable: {
    enabled: true,
    distance: 3,
    autoDistance: true,
    showGhost: true,
    deleteOnDropOff: false,
    },
    dropmode: {
    active: false,
    },
    selectable: {
    enabled: true,
    },
    stats: {
    // on touchscreen, default to "tap-tap" moves
    // instead of drag
    dragged: !('ontouchstart' in window),
    },
    events: {},
    drawable: {
    enabled: true, // can draw
    visible: true, // can view
    defaultSnapToValidMove: true,
    eraseOnClick: true,
    shapes: [],
    autoShapes: [],
    brushes: {
        green: { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 },
        red: { key: 'r', color: '#882020', opacity: 1, lineWidth: 10 },
        blue: { key: 'b', color: '#003088', opacity: 1, lineWidth: 10 },
        yellow: { key: 'y', color: '#e68f00', opacity: 1, lineWidth: 10 },
        paleBlue: { key: 'pb', color: '#003088', opacity: 0.4, lineWidth: 15 },
        paleGreen: { key: 'pg', color: '#15781B', opacity: 0.4, lineWidth: 15 },
        paleRed: { key: 'pr', color: '#882020', opacity: 0.4, lineWidth: 15 },
        paleGrey: {
        key: 'pgr',
        color: '#4a4a4a',
        opacity: 0.35,
        lineWidth: 15,
        },
    },
    prevSvgHash: '',
    }
}
export { groundConfig as config }