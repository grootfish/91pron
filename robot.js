
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot){
  robot.clone();
  
  this.robotOptions = {
    parent: {
      direction: 1
  	},
    clone: {
      direction: 1,
      canStartFight: false,
      goBackOnCollision: false
    }
  };
};

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  if (robot.parentId == null) {
  	robot.turn(this.robotOptions.parent.direction);
  } else {
    if (this.robotOptions.clone.canStartFight) {
  		robot.turn(this.robotOptions.clone.direction);      
    } else {
      robot.back(100);
      this.robotOptions.clone.canStartFight = true;
    }
  }
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot, scannedRobot = ev.scannedRobot;
  if (robot.parentId == null) {
  	this.robotOptions.parent.direction = scannedRobot.angle > 180 ? -1 : 1;
  } else {
  	this.robotOptions.clone.direction = scannedRobot.angle > 180 ? -1 : 1;    
  }
  if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
      return;
  }
  
  robot.stop();
  for (var i=0; i<10; i++) {
    robot.fire();
    robot.ahead(10);
  }
};

Robot.prototype.onWallCollision = function(ev) {
  ev.robot.stop();
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
  var robot = ev.robot;
  robot.stop();
  robot.turn(ev.bearing);
};