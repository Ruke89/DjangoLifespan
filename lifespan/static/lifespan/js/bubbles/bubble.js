define(["jquery"], function(jquery) {

    function bubble(x, y, height, normalizedLifeExpectancy, context, bubbleColour, bubbleAlpha) {
         this.x = x;
         this.y = y;
         this.height = height;
         this.startHeight = y;
         this.normalizedLifeExpectancy = normalizedLifeExpectancy;
         this.scale = 1;
         this.dead = false;
         this.context = context;
         this.colour = bubbleColour;
         this.alpha = bubbleAlpha;
         this.normalisedY = 0;
    }

    bubble.prototype = {
        update: function()
        {
            this.normalisedY = (((this.height-this.y)-0)/(this.height-0));
            this.scale =  (60 * this.normalisedY);
            this.y -= 1;

            if(this.normalizedLifeExpectancy <= this.normalisedY){
                this.dead = true;
            }
        },
        draw: function (){
            this.context.beginPath();
            this.context.globalAlpha =  1 -this.normalisedY ;
            this.context.fillStyle = this.colour;
            this.context.arc(this.x,this.y,this.scale+1,0,2*Math.PI);
            this.context.fill();
        },
        isDead: function() {
            return this.dead;
        }
    };
    return bubble;
});