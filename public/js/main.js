import * as Perso from "./module/instance.js";
let start = document.querySelector(`#start`)
let acceuil = document.querySelector(`#acceuil`)
let select = document.querySelector(`#select`)
let game = document.querySelector(`#game`)
let char = select.children[1].querySelectorAll(`div`)
let info = document.querySelector(`#info`)
let btnAttack = document.querySelector(`#attack`)
let btnDefend = document.querySelector(`#defense`)
let btnReplay = document.querySelector(`#replay`)
let you = document.querySelector(`#you`)
let cpu =document.querySelector(`#cpu`)
let youHp = document.querySelector(`#you-live`).querySelector(`p`)
let cpuHp = document.querySelector(`#cpu-live`).querySelector(`p`)
let win = document.querySelector(`#screen-win`)
let hp = document.querySelector(`#hp`)
let hp2 = document.querySelector(`#hp-cpu`)
let youWin = document.querySelector(`#you-win`)
let winLose = document.querySelector(`#win-lose`)
let attack = new Audio("./public/assets/music/attack.mp3");
let  track1 = new Audio("./public/assets/music/Track 1.mp3");
let  button = new Audio("./public/assets/music/button.mp3");
let  winS = new Audio("./public/assets/music/win.mp3");
let  loseS = new Audio("./public/assets/music/lose.mp3");
let text = info.querySelectorAll(`p`)[2]

// Ajouter un gestionnaire d'événement pour l'événement 'ended'
track1.addEventListener('ended', function() {
    // Réinitialiser la position de lecture à zéro
    track1.currentTime = 0;
    // Redémarrer la lecture
    track1.play();
});

//replay
btnReplay.addEventListener(`click`,()=>{
    document.location.reload();
})





//start
start.addEventListener('click',()=>{
acceuil.style.display =  `none`
select.style.display = `flex`
button.play();


})


//!chose a ennemie and player

    let enemie 
    let tabEnemie 
    let player
    char.forEach(element => {
        element.addEventListener('click', ()=>{
            track1.play();
            button.play();
            select.style.display =`none`
            game.style.display = `flex`
            info.style.display = `flex`
            switch (element.id) {
                case `luffy`:
                    player = Perso.luffy
                    tabEnemie = [,Perso.sanji,Perso.zoro]
                    enemie = tabEnemie[Math.round(Math.random() * tabEnemie.length)]
                    cpu.src = enemie.normal
                    break;
            
                case `sanji`:
                    player = Perso.sanji
                    tabEnemie = [Perso.luffy,Perso.zoro]
                    enemie = tabEnemie[Math.round(Math.random() * tabEnemie.length)]
                    cpu.src = enemie.normal
                    break;
            
                case `zoro`:
                     player = Perso.zoro
                     tabEnemie = [Perso.luffy,Perso.sanji]
                     enemie = tabEnemie[Math.round(Math.random() * tabEnemie.length)]
                     cpu.src = enemie.normal
                    break;
              
            
                default:
                    break;
            }
            you.src = player.normal
            console.log(player);
            youHp.innerHTML = `${player.hp} hp`
            cpuHp.innerHTML = `${enemie.hp} hp`
        }) 
       
    });
    





//!function attack
let fAttack = ()=>{

    btnAttack.addEventListener('click',()=>{
        text.innerText = `you attack the enemy`
        button.play();
        btnAttack.style.display = `none`
        btnDefend.style.display = `none`
        enemie.ap = Math.floor( Math.random() * (50 - 20) + 20);
        console.log(enemie.ap);
        setTimeout(() => {
            you.src = player.marche
            you.style.transition = `2s`
            you.style.left = `400px`
        }, 1000);
        
        setTimeout(() => {
            you.src = player.attack
            
            setTimeout(() => {
                cpu.style.filter= `grayscale(10000%)`
                attack.play();
                cpu.style.transition= `0s `
                enemie.hp-= player.ap 
                if (enemie.hp <= 0) {
                    winLose.src = "./public/assets/image/bg/win.png"
                    youWin.src = player.normal
                    win.style.display = 'flex'
                    info.style.display = `none`
                    game.style.display =` none`
                    track1.pause()
                    winS.play();
                    btnReplay.style.display = 'block'
                    
                }
                cpuHp.innerText = `${ enemie.hp} hp`
                hp2.style.width = `${enemie.hp}px`
            }, 1500);
        }, 2000);
        setTimeout(() => {
            you.style.transition = ``
            you.src = player.marche
            you.style.transform = `rotateY(0deg)`
            cpu.style.filter= `grayscale(0%)`
        }, 4300);
        setTimeout(() => {
            you.style.transition = `1.5s`
            you.src = player.marche
            you.style.left = `200px`
        }, 5300);
        setTimeout(() => {
            you.style.transition = ``
            you.src = player.normal
            you.style.transform = `rotateY(180deg)`
        }, 7300);
    
        setTimeout(() => {
            cpu.style.transition = ``
            cpu.src = enemie.marche
        }, 8300);
        setTimeout(() => {
            cpu.style.transition = `2s`
            cpu.style.right =`400px`
            text.innerText = `the enemy is attacking you`
        }, 8800);
    
        setTimeout(() => {
            cpu.style.transition = ``
            cpu.src = enemie.attack
            
            setTimeout(() => {
                player.hp = player.hp-= enemie.ap 
                if (enemie.hp <= 0) { 
                }
                else if (player.hp <= 0 ) {
                    winLose.src = "./public/assets/image/bg/lose.png"
                    youWin.src = enemie.normal
                    win.style.display = 'flex'
                    info.style.display = `none`
                    game.style.display =` none`
                    track1.pause()
                    loseS.play();
                    btnReplay.style.display = 'block'

                }
                youHp.innerText = `${player.hp } hp`
                hp.style.width = `${player.hp}px`
                you.style.filter= `grayscale(10000%)`
                attack.play();
                you.style.transition= `0s `
            }, 1000);
       
        }, 9500);
        setTimeout(() => {
            you.style.filter= `grayscale(0%)`
            cpu.style.transition = `0s`
            cpu.src = enemie.marche
            cpu.style.transform = `rotateY(180deg)`
        }, 11500);
        setTimeout(() => {
            cpu.style.transition = `2s`
            cpu.src = enemie.marche
            cpu.style.right =`200px`
        }, 12500);
        setTimeout(() => {
            cpu.style.transition = `0s`
            cpu.src = enemie.normal
            cpu.style.transform = `rotateY(0deg)`
            btnAttack.style.display =`block `
            btnDefend.style.display =`block `
            text.innerText = ``
        }, 14000);
       
    
       
    })
    
}




//! fuction defend
let defense = ()=>{
    btnDefend.addEventListener('click', ()=>{
        button.play();      
        btnAttack.style.display = `none`
        btnDefend.style.display = `none`
    
        setTimeout(() => {
            cpu.style.transition = ``
            cpu.src = enemie.marche
        }, 2000);
        setTimeout(() => {
            cpu.style.transition = `2s`
            cpu.style.right =`400px`
            text.innerText = `the enemy is attacking you`
        }, 3000);
    
        setTimeout(() => {
            cpu.style.transition = ``
            cpu.src = enemie.attack
            you.src = player.defend
            text.innerText = `you defend yourself`
            setTimeout(() => {
                enemie.ap = Math.floor( Math.random() * (50 - 20) + 20);
                player.hp = Math.floor( player.hp-= (enemie.ap/2))
                if (player.hp <= 0 ) {
                    winLose.src = "./public/assets/image/bg/lose.png"
                    youWin.src = enemie.normal
                    win.style.display = 'flex'
                    info.style.display = `none`
                    game.style.display =` none`
                    track1.pause();
                    loseS.play();
                    btnReplay.style.display = 'block'


                }
                youHp.innerText = `${player.hp } hp`
                hp.style.width = `${player.hp}px`
                you.style.filter= `grayscale(10000%)`
                attack.play();
                you.style.transition= `0s `
            }, 1000);
       
        }, 4500);
        setTimeout(() => {
            you.src = player.normal
            you.style.filter= `grayscale(0%)`
            cpu.style.transition = `0s`
            cpu.src = enemie.marche
            cpu.style.transform = `rotateY(180deg)`
            text.innerText = ``
        }, 6500);
        setTimeout(() => {
            cpu.style.transition = `2s`
            cpu.src = enemie.marche
            cpu.style.right =`200px`
        }, 7500);
        setTimeout(() => {
            cpu.style.transition = `0s`
            cpu.src = enemie.normal
            cpu.style.transform = `rotateY(0deg)`
            btnAttack.style.display =`block `
            btnDefend.style.display =`block `

        }, 8000);
       
    })
}



        fAttack()
        defense()