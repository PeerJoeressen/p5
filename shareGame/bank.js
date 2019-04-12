var money;
var shares;
function bank(){    
    this.money=500;
    this.shares=[0,0,0,0,0,0,0,0];

   this.getMoney=function(){
   return this.money;
  }

   this.buyShare = function(cost, share){
    if(cost>0){
    if(this.money-cost>0){
    this.money-=cost;
    this.shares[share]+=1;
    console.log(this.shares);
  }}}

  this.sellShare = function(cost,share){
    console.log(this.shares);
    if(this.shares[share]>0){
    this.money+=cost;
    this.shares[share]-=1;
  }}

   this.getShare = function(i){
    return this.shares[i];
  }
  
}