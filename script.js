const nadpis = document.querySelector("h1");  //odchytávání, vždy const, nechceme měnit
//const nadpis2 = document.querySelectorAll("h1"); teď řešit nebudeme

nadpis.textContent = "Toto jsem změnil pomocí JS"

//změny inline stylů -  jsou přímo na html elementu
nadpis.style.color = "yellow";
nadpis.style.backgroundColor = "red";
//moc se to nedělá, přebíjí styly CSS, hodí se pro testující účely, ne moc pro praxi

//můžeme ovlivnit třídy na úrovni elementu
//nekontroluje, zda je styl použit i v html a použije jej
nadpis.classList.add("ramecek");  //přidáme třídu
nadpis.classList.remove("ramecek");  //smažeme třídu

//id
document.querySelector("#kocka").src="https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg?w=300";
document.querySelector("#kocka").style.width = "200px";
document.querySelector("#kocka").alt = "pug";

document.querySelector(".produkty p");  //výběr kontextového selektoru

document.getElementById //už se moc nepoužívá, query selektor je univerzálnější

