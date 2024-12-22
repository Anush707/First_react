function Random(){
let number= Math.random() * 7;
return <h1 style={{'background-color':'#7799'}}>
  random number is: {Math.round(number)}
</h1>
}
export {Random};