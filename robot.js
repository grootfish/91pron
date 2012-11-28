
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot){
    
};

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  robot.turn(1);
  robot.rotateCannon(-2);
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    robot.fire();
};

