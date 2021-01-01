class Chain{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.02, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.Chain=Constraint.create(options)
		World.add(world,this.Chain)
	}

	attach(body){
		this.Chain.bodyA=body;
	}

	fly()
	{
		this.Chain.bodyA=null;
	}

	display()
	{
		if(this.Chain.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}


/*

class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.point1 = pointB
        World.add(world, this.chain);
    }
          fly(){
              this.chain.bodyA = null
          }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
       // var pointB = pointB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.point1.x, this.point1.y);
        }
    }
}
*/