
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot){
  robot.clone();
  if (robot.parentId == null) {
    robot.turn(90);
  }
};

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  robot.turn(1);
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot, scannedRobot = ev.scannedRobot;
  if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
      return;
  }
  for (var i=0; i<10; i++) {
    robot.fire();
    robot.ahead(10);
  }
};

Robot.prototype.onWallCollision = function(ev) {
  ev.robot.turn(45);
};