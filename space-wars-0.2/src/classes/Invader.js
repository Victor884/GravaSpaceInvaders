import { PATH_INVADER_IMG } from "../utils/constants.js";
import Projectile from "./Projectile.js";

if(PATH_INVADER_IMG) {
    console.log("existe a imagem")
} else {
    console.log("NAO EXISTE")
}

class Invader {
    constructor(position, velocity) {
        this.width = 50 * 0.8;
        this.height = 37 * 0.8;
        this.velocity = velocity;

        this.position = position

        this.image = this.getImage(PATH_INVADER_IMG);
    }

    getImage(path) {
        const image = new Image()
        image.src = path;
        return image;
    }

    moveLeft() {
        this.position.x -= this.velocity;
    }

    moveRight() {
        this.position.x += this.velocity;
    }

    moveDown(){
        this.position.y += this.height;
    }

    incrementVelocity(boost){
        this.velocity += boost
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    shoot(projectiles) {
        const p = new Projectile({
            x: this.position.x + this.width / 2 - 1,
            y: this.position.y + this.height,
        }, -10);

        projectiles.push(p);
    }

    hit(projectile){
        return(
            projectile.position.x >= this.position.x &&
            projectile.position.x <= this.position.x + this.width &&
            projectile.position.y >= this.position.y &&
            projectile.position.y <= this.position.y + this.height
        );
    }

}

export default Invader;