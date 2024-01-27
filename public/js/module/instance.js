class perso {
    constructor(hp, ap, mort,normal,marche,attack,defend) {
      this.hp = hp;
      this.ap = ap;
      this.mort = mort;
      this.normal = normal;
      this.marche = marche;
      this.attack = attack;
      this.defend = defend;
    }
  }

export let luffy = new perso(150,30,"./public/assets/image/luffy-mort.png",`./public/assets/image/luffy-normal.gif`,`./public/assets/image/luffy-marche.gif`,`./public/assets/image/luffy attack.gif`,`./public/assets/image/luffy-defense.gif`)

export let sanji = new perso(150,30,5,`./public/assets/image/sanji/sanji-normal.gif`,`./public/assets/image/sanji/sanji-marche.gif`,`./public/assets/image/sanji/sanji-attack.gif`,`./public/assets/image/sanji/sanji-defense.gif`)

export let zoro = new perso(150,30,5,`./public/assets/image/zoro/zoro-normal.gif`,`./public/assets/image/zoro/zoro-marche.gif`,`./public/assets/image/zoro/zoro-attack.gif`,`./public/assets/image/zoro/zoro-defend.gif`)