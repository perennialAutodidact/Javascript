const getScaleForumla = scaleName => {
    const scales = {
        'ionian': ['1','2','3','4','5','6','7'],
        'dorian': ['1','2','b3','4','5','6','b7'],
        'phrygian': ['1','b2','b3','4','5','b6','b7'],
        'lydian': ['1','2','3','#4','5','6','7'],
        'mixolydian': ['1','2','3','4','5','6','b7'],
        'aeolian': ['1','2','b3','4','5','6','b7'],
        'locrian': ['1','b2','b3','4','b5','b6','b7'],
    }

    return scales[scaleName]
}
let a4 = teoria.note('a4');
console.log(a4.scale('mixolydian').simple());
