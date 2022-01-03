let imgDouble = 'img';
let imgDoubleCompteur = 0;
let case0 = document.querySelector('#tile-0-0');
let case1 = document.querySelector('#tile-0-1');
let case2 = document.querySelector('#tile-0-2');
let case3 = document.querySelector('#tile-0-3');
let case4 = document.querySelector('#tile-1-0');
let case5 = document.querySelector('#tile-1-1');
let case6 = document.querySelector('#tile-1-2');
let case7 = document.querySelector('#tile-1-3');
let case8 = document.querySelector('#tile-2-0');
let case9 = document.querySelector('#tile-2-1');
let case10 = document.querySelector('#tile-2-2');
let case11 = document.querySelector('#tile-2-3');
let case12 = document.querySelector('#tile-3-0');
let case13 = document.querySelector('#tile-3-1');
let case14 = document.querySelector('#tile-3-2');
let case15 = document.querySelector('#tile-3-3');

test();
function test(){
    let caseTab1;
    let caseTab2;
    let tab = [];
    let j = 0;
    let i = 0;
    let k = 0;
    for(i = 0; i =  2; i+1){
        caseTab1 = Math.floor(15*Math.random());
        for(j = 0; j = tab; j++){
            if(tab[j] == caseTab1){
                caseTab1 = Math.floor(15*Math.random());
            } else {
                caseTab2 = Math.floor(15*Math.random());
                for(k = 0; k = tab; k++){
                    if(tab[k] == caseTab2){
                        caseTab2 = Math.floor(15*Math.random());
                    } else {
                        tab.push(caseTab1);
                        tab.push(caseTab2);
                        test2(caseTab1, caseTab2);
                    }
                }
            }
        }
    }
}


function test2(img1, img2){
    while(imgDoubleCompteur != 2) {
        switch(img1){
            case 0:
                case0.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 1:
                case1.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 2:
                case2.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 3:
                case3.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 4:
                case4.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 5:
                case5.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 6:
                case6.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 7:
                case7.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 8:
                case8.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 9:
                case9.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 10:
                case10.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 11:
                case11.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 12:
                case12.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 13:
                case13.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 14:
                case14.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 15: 
                case14.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
        }
        switch(img2){
            case 0:
                case0.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 1:
                case1.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 2:
                case2.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 3:
                case3.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 4:
                case4.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 5:
                case5.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 6:
                case6.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 7:
                case7.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 8:
                case8.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 9:
                case9.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 10:
                case10.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 11:
                case11.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 12:
                case12.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 13:
                case13.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 14:
                case14.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
            case 15:
                case14.setAttribute('class', imgDouble+imgDoubleCompteur)
                break;
        }
        imgDoubleCompteur ++;
    }
    console.log("J'ai fini.");
}

//console.log("The bomb is in tile #" + bombRow+"-"+bombColumn);
function doClick(id){
    console.log("Je rentre");
    if(id.classList == 'tile img1'){
        id.style.backgroundImage = "url('https://us.123rf.com/450wm/cammep/cammep1209/cammep120900081/15311235-black-bomb-isol%C3%A9-sur-fond-blanc-vector-illustration.jpg?ver=6')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img2') {
        id.style.backgroundImage = "URL('https://m.media-amazon.com/images/I/41+1cfukRlL.jpg')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img3') {
        id.style.backgroundImage = "URL('data:image/png;base64,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')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img4') {
        id.style.backgroundImage = "URL('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAclBMVEX////lCRTkAADlABD++fn83N7mGyP3wMLweX71sLLvgoX1rK/lAAj+9vfrSlD72Nr97/DnEB3wfoLpPUP96uv95efsWl/4u771pan5x8roKzLrQEj70tTzlZnvbXL3trnnIivqMzvtY2nznJ/qU1fwjZCE6y5/AAAC40lEQVRoge2W2ZaiMBBAs7CpYVMQUGnB5f9/caoSkKU74Jx2nqbugyQCuUmoVMIYQRAEQRAEQRAEQRAEQRAE8b8QCgALWVeIxUDONqOadNluVGUsgN/y1VIBtS9oMILrFv8o8anQ4nUE56KCQiIlR6/rSW6QXs6ugvfIE3bjVUsZ2woudq+WfKgFcN0Jrk4JdOABf2xt49Xe/dwrEaW9UNAeqXqvuWn16hZ9xi6CS3FZ8somm3lTTZPD5MEVxWnKW+M193hj88L0c3Fk7AaXyKbVXi6KiVcd3EQDt+G3gomLcl3dYNthf9PirWA6PDeH/uOwF73HmTcZPxKj18QHevevGxavc1Zc3Et4a9rOdy90b+rNfuOFQIYWW2iutmqNl8Ny+KA3g4iA1qSwD7fzqvMH51lHFg4msGs7Lxf5yCubIAi+jv0amHo59wAI9QVvZbzVmhc/RciHdSR1QuqDce7F1csXvQyXnmoXtNqbniQslHSWr6xe3dFl7x1zx2bNK2t4xffm4y1+9vape9VrzVW9V8SpVMfT8H1PZVH4RR9c3+LKAdiiV8Cc4Sax4nUeCsKFfyyeryZobHvRy8vqLqrZR9av8zDxfF31Zh/14jKSJvuuePse/r13CNrBCzuRbFE8aeYnL6bUkfesLU7yhnfvVxc3C8feGFdkEcHm8Fz1ZmMv96JDA+slzVe93aoS8XT/VQcHHlXn5f0IdbB3DV6uFJ4pvDe8XY4ZeUOhd6KskUuZsvfuxNirs+EwXiEOxovnuiHb77vBKjX24i6o4Mt+Qf226nUbTFNY6KYubaObiYvkXpaFThQsdF13mDu/rp/PbXB7RLB/6/MkeMOTkPo4h+craY2s3suOoIKzGsu2dVnEeZYloWPt7bSJMEzg0aQq7pBaL4fWEy72ESNrZ32pPz9fiirO3xOtkLnms96h5bPV+7xeFo4Fv8Mt6qVcSRAEQRAEQRAEQRAEQRAEQfwb/gApjinSEUmDQwAAAABJRU5ErkJggg==')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img5') {
        id.style.backgroundImage = "URL('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABTCAMAAACS2miYAAAAeFBMVEX5+fn6AAH6///0AADwuLb3AAD3///7/f7wAADtlZP5/PvusLDwr6/4/fr69vX45+T11NLzxcfytbf1r6/zpqT0np3smJfywLz32trwb27yc3X06un04ODwKSfvXFrtjIPyRkXuMTbvycn1bGjrGhzwTkzxhYPyko0DPUR/AAABV0lEQVRoge2W23KCMBCGw4YcXEoQRaBFWsVa3/8Nu6O9CLGlN11nOrPfBWT25mPDn4NSgiAIgiAIgiAIwr8CESGBSsgrLSFU63qzbXZtuyLadtdsi27qK2X5rAjVszYmu8d4/zKw9Yx7n31nvTEOjskLrz9biTeuqUa/pM1GyzPTbr/YbuZZrOSdYsvh7iN0xeO1m0hiuv6YeE3PE6yyiS25gyZZVBOTdzfzQoDhpONSzeOFxEsBt/V7XOLJ872XaiES54+ZZ7K6bbykH+RFWJ9nuep4vHaeZ6s+Zqliy7PLZ8116a5pehatwjq2jEmztF8xnYS4n6vSjVIDi/bX8+jI5bWnBavJLlxeNYwL4rMqubwuXEbvv/6yMddTwdBAa31YBcY7JQKGqp+mLi+KJ6Io8ryu19UQypKt26uYmkZHANye1zddn5kv0IIgCIIgCIIgCMIf8wklOA8OVXQISgAAAABJRU5ErkJggg==')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img6') {
        id.style.backgroundImage = "URL('data:image/png;base64,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')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img7') {
        id.style.backgroundImage = "URL('https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI')";
        id.style.backgroundSize = 'cover';
    } else if(id.classList == 'tile img8') {
        id.style.backgroundImage = "URL('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Google_Classroom_icon.svg/1200px-Google_Classroom_icon.svg.png')";
        id.style.backgroundSize = 'cover';
    } else {
        console.log("Je sors sans rien")
    }
}