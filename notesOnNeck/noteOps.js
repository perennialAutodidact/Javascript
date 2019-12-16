const noteToInt = (note, accidental='none') => {

    console.log(`noteToBeInted: ${note}`);
    

    const note_dict = {
        'C':{
            'b':11,
            'none':0,
            '#':1,
        },
        'D':{
            'b': 1,
            'none':2,
            '#':3,
        },
        'E':{
            'b':3,
            'none':4,
            '#':5,
        },
        'F': {
            'b':4,
            'none':5,
            '#':6,
        },
        'G':{
            'b':6,
            'none':7,
            '#':8,
        },
        'A': {
            'b':8,
            'none':9,
            '#':10,
        },
        'B': {
            'b':10,
            'none':11,
            '#':0,
        },
    }


    return note_dict[note[0]][accidental]
}


let notes = [
    'Cb', 'C', 'C#', 'Db', 'D',
    'D#', 'Eb', 'E', 'E#', 'Fb', 
    'F', 'F#', 'Gb', 'G', 'G#', 
    'Ab', 'A', 'A#', 'Bb', 'B', 'B#',
]

let accidental;
for(let i=0; i<notes.length; i++){
    if(notes[i].length>1){
        accidental = notes[i][1];
    } else {
        accidental = 'none';
    }

    console.log(`${notes[i]}:${noteToInt(notes[i], accidental)}`);
}


const expandDoubleSharps = note => {
    // Convert double sharp symbol 'x' to two sharp symbols '##'
    // Example: expandDoubleSharps('Fx') => 'F##'
    for(let i=0; i<note.length; i++){
        if(note[i] == 'x'){
            note = note.replace(note[i],'##');
        }
    }
    return note
}

const reduceAccidentals = note => {
    // Convert all 'x's to '##'
    // Get number of note to be reduced, 
    // ++ or -- that value for each tailing # or b
    // Example: reduceAccidentals('B##') => 'C#', reduceAccidentals('Fb') => 'E'

    note = expandDoubleSharps(note);
    
    // console.log(`note: ${note}`);
    
    let noteVal,
        noteName,
        accidental;

    if(note.length > 1){
        // console.log();
        
        // console.log(note.substring(0,2));
        noteName = note.substring(0,1);
        accidental = note.substring(1,2);
        
    } else if(note.length == 1){
        noteName = note;
        accidental = 'none';
    }
        // console.log(`notename: ${noteName} ${accidental}`);
        
        noteVal = noteToInt(noteName, accidental);

        for(let i=2; i<note.length; i++){
            if(note[i] == '#'){
                noteVal++;
                if(noteVal == 12){
                    noteVal = 0;
                }
            } else if(note[i] == 'b') {
                noteVal--;
                if(noteVal == -1) {
                    noteVal = 11;
                }
            }
        }
    
    return noteVal
}


// let n = 'B##'
// console.log(`reduce(${n}): ${reduceAccidentals(n)}`);



// const reduceAccidentals = note => {
//     //Reduce any extra accidentals to proper notes
//     // Example: reduceAccidentals('C###') => 'E'
//     note = expandDoubleSharps(note)

//     let noteVal = noteToInt(note[0]),
//         token = '';

//     console.log(`noteVal: ${noteVal}`);
    
//     for(let i=1; i<note.length; i++){
//         token = note[i];
//         if(token == 'b'){
//             noteVal--;
//         } else if(token == '#'){
//             noteVal++;
//         } else {
//             // raise format error
//             console.log(`${token} is not a valid token`);
//         }
//     }


//     console.log(`noteVal: ${noteVal}`);
//     // console.log(`noteInt: ${noteToInt(noteVal%12)}`);
    
//     if(noteVal >= noteToInt(note[0])){

//         return intToNote(noteVal%11);

//     } else {
//         return intToNote(noteVal%11, 'b')
//     }
// }

// const _get_note_names = (accidentals='#', direction='') =>{
//     const notesSharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
//     const notesFlats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

//     if(accidentals == '#'){
//         if(direction == ''){
//             return notesSharps
//         } else {
//             return notesSharps.slice().reverse()
//         }
//     } else if(accidentals == 'b'){
//         if(direction == ''){
//             return notesFlats
//         } else {
//             return notesFlats.slice().reverse()
//         }
//     }
// }

// const intToNote = (noteInt, accidentals='#') => {

//     console.log(`NOTE_INT: ${noteInt}`);
    

//     if(0 <= Math.abs(noteInt) && Math.abs(noteInt) <= 12){
//         let notes;
//         if(accidentals == '#'){
//             if(noteInt < 0){
//                 notes = _get_note_names('#','reversed')
//                 return notes[Math.abs(noteInt)]
//             } else {
//                 notes = _get_note_names('#')
//                 return notes[noteInt]
//             }
//         } else if(accidentals == 'b'){
//             if(noteInt < 0){
//                 notes = _get_note_names('b', 'reversed')
//                 return notes[Math.abs(noteInt) - 1]
//             } else {
//                 notes = _get_note_names('b')
//                 return notes[noteInt]
//             }
//         } else {
//             //raise FormatError()
//             console.log(`${accidentals} is not valid as accidental.`);
//         }
//     } else {
//         // raise RangeError()
//         console.log(`int is out of bounds (0-11): ${noteInt}`);
//     }

// }

// const isEnharmonic = (note1, note2) => {
//     //Test whether note1 and note2 are enharmonic, i.e. they sound the same.
//     return noteToInt(note1) == noteToInt(note2)
// }

// const isValidNote = note => {
//     // return true if note is a recognized format. False if not

//     note = expandDoubleSharps(note);

//     if(_note_dict[note[0]] == undefined){
//         return false
//     } else {
//         for(let i=1; i<note.length; i++){
//             if(note[i] !== 'b' && note[i] !== '#'){
//                 console.log(`invalid char: ${note[i]}`);

//                 return false
//             }
//         }
//         return true
//     }
// }

// const noteToInt = note => {
//     // Convert notes in the form of C, C#, Cb, C##, etc. to an integer 
//     // in the range of 0-11. 
//     //NoteFormatError exception if the note format is not recognized
//     let noteVal;

//     if(isValidNote(note)){
//         noteVal = _note_dict[note[0]]
//     } else {
//         console.log(`'${note}' is not a valid note`);
//     }

//     for(let i=1; i<note.length; i++){
//         if(note[i] == 'b'){
//             noteVal--;
//         } else if(note[i] == '#'){
//             noteVal++;
//         }
//     }
//     return noteVal % 12
// }

// // console.log(expandDoubleSharps("Bxbxb"))
// let n = _note_dict['Bb'];

// console.log(`intToNote(${n}):${intToNote(n)}`);

// console.log(`reduceAccidentals(${n}): ${reduceAccidentals(n)}`);
// // console.log(`noteToInt('Cb')`)



