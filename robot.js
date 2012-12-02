
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot){
  robot.clone();
  
  this.robotOptions = {
    clone: {
      canStartFight: false,
      goBackOnCollision: false
    }
  };
};

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  if (robot.parentId == null) {
  	robot.turn(1);
  } else {
    if (this.robotOptions.clone.canStartFight) {
  		robot.turn(1);      
    } else {
      robot.back(100);
      this.robotOptions.clone.canStartFight = true;
    }
  }
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot, 
      scannedRobot = ev.scannedRobot;

  //if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
      //return;
  //}
  
  for (var i=0; i<5; i++) {
    robot.fire();
    robot.ahead(10);
  }
};

Robot.prototype.onWallCollision = function(ev) {
  ev.robot.turn(10);
};

Robot.prototype.onRobotCollided = function(ev) {
  if (ev.robot.parentId == null) {
    ev.robot.back(20);
  } else {
    ev.robot.ahead(20);
  }
};

Robot.prototype.onHitByBullet = function(ev) {
  ev.robot.turn(ev.bearing);
};