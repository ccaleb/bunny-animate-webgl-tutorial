var flwebgl;
(function (flwebgl) {
	(function (actions) {
		actions.sc_Scene321_0_0 = function() {
			
			/* Mouse Click Event
			Clicking on the specified symbol instance executes a function in which you can add your own custom code.
			
			Instructions:
			1. Add your custom code on a new line after the line that says "// Start your custom code" below.
			The code will execute when the symbol instance is clicked.
			*/
			
			//Get a reference to the Symbol on Stage using its Instance Name
			this.defend = this.getChildByName("defend");
			this.attack = this.getChildByName("attack");
			this.bunny = this.getChildByName("bunny");
			
			canvas.onclick = function(e) {  
			    var boundingRect = this.defend.getBounds(this);
			    if(isMouseOverSymbol(e.offsetX, e.offsetY, boundingRect)) {     
			        // Start your custom code
			        // This example code shows an alert with words "Mouse clicked".
			        
			        this.bunny.gotoAndPlay("jump");
			        
			        // End your custom code                  
			    }
				
				var boundingRect = this.attack.getBounds(this);
				if(isMouseOverSymbol(e.offsetX, e.offsetY, boundingRect)) {    
					// Start your custom code
					// This example code shows an alert with words "Mouse clicked".
			        
					this.bunny.gotoAndPlay("punch");
			        
					// End your custom code                  
				}
			}.bind(this);
			
			//Function to check whether the specified point lies within the rect.
			function isMouseOverSymbol(pointX, pointY, rect) {
			    if(rect.left <= pointX && pointX <= rect.left + rect.width)
			        if(rect.top <= pointY && pointY <= rect.top + rect.height)
			            return true;
			        
			    return false;
			}
			
			canvas.onmousedown = function(e) {
				var boundingRect = this.defend.getBounds(this);
				if(isMouseOverSymbol(e.offsetX, e.offsetY, boundingRect)) {     
					this.defend.gotoAndStop(2);
				}
				
				var boundingRect = this.attack.getBounds(this);
				if(isMouseOverSymbol(e.offsetX, e.offsetY, boundingRect)) {     
					this.attack.gotoAndStop(2);
				}
			}.bind(this);
			
			canvas.onmouseup = function(e) {  
				var boundingRect = this.defend.getBounds(this);
				if(isMouseOverSymbol(e.offsetX, e.offsetY, boundingRect)) {     
					this.defend.gotoAndStop(1);
				}
			
				var boundingRect = this.attack.getBounds(this);
				if(isMouseOverSymbol(e.offsetX, e.offsetY, boundingRect)) {     
					this.attack.gotoAndStop(1);
				}
			}.bind(this);
			
		}
		actions.mc_Bunny_1_62 = function() {
			this.gotoAndPlay("idle");
		}
		actions.mc_Bunny_1_100 = function() {
			this.gotoAndPlay("idle");
		}
		actions.mc_Bunny_1_135 = function() {
			this.gotoAndPlay("idle");
		}
		actions.mc_Button32Attack_0_0 = function() {
			this.stop();
		}
		actions.mc_Button32Defend_0_0 = function() {
			this.stop();
		}
	})(flwebgl.actions || (flwebgl.actions = {}));
})(flwebgl || (flwebgl = {}));
