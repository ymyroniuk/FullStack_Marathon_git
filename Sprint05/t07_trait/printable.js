exports.print = () => {
    console.log(`2 x Repulsors\nM134 7.62mm Minigun\n2 x FN F2000 Tacticals\nSidewinder "Ex-Wife" Self-Guided Missile\nM24 Shotgun\nMilkor MGL 40mm Grenade Launcher`)
}
/*
  Task name: Mixins
*/

const MarkII = require('./markii');
const Printable = require('./printable');

class WarMachine extends MarkII {}
Object.assign(WarMachine.prototype, Printable);

const wm = new WarMachine;
wm.print();
