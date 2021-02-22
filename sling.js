constuctor(body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetx
    this.offsety=offsety
    var options={
        bodyA: body1,
        bodyB:body2,
        pointB{x:this.offsetX,Y:this.offsetY }
    }
//console.log(options);
this.rope=Constraint.create(options)
World.add(world,this.rope)


    }
}
display()
{
    
}
