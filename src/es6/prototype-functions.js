function oneFunction (val){
    this.val = val
}

oneFunction.prototype.print = function(){
    console.log(this.val)
}

oneFunction.prototype.nope = function() {
    return this.val + 59
}

const f = new oneFunction(10)
const g = new oneFunction(20)

f.print()
console.log(f.nope())
g.print()
console.log(g.nope())

export default oneFunction