function Cat(name, owner) {
    this.name = name;
    this.owner = owner;

}

Cat.prototype.cuteStatement = function() {
    console.log(this.owner + " loves " + this.name + ".");
}

cat = new Cat("miracles", "god");
cat1 = new Cat("sandwich", "Sid");
cat2 = new Cat("schmoe", "Joe");
cat.cuteStatement()
cat1.cuteStatement()
cat2.cuteStatement()

Cat.prototype.cuteStatement = function() {
    console.log("Everyone loves " + this.name + ".");
}
cat.cuteStatement()
cat1.cuteStatement()
cat2.cuteStatement()

Cat.prototype.meow = function() {
    console.log("MEEEOOWWWWWW");
}
cat.meow()
cat1.meow()
cat2.meow()

cat.meow = function (){
    console.log("meow.");
}

cat.meow()
cat1.meow()
cat2.meow()
