
/*
 * @author Joey Cadieux <joey.cadieux@techie.com>
 */

var cssRule =
	"color: red;" +
	"font-size: 70px;" +
	"font-weight: bold;" +
	"text-shadow: 1px 1px 10px rgb(0, 0, 0);" +
	"filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cStop!", cssRule);

var cssRule =
	"color: black;" +
	"font-size: 20px;" +
	"font-weight: arial;" +
	"text-shadow: none;" +
	"filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log(
	"%c Attention! Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.Do not enter or paste code that you do not understand.",
	cssRule
);
