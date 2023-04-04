let count = 1;

for (let x = 0; x < 3; x++) {
    console.log(`Pagina ${x + 1}\n`);
    for (let y = 0; y < 4; y++) {
        let element = "";
        for (let z = 0; z < 5; z++) {
            element += `${count}\t`;
            count++;
        }
        console.log(element);
    }
    console.log("\n");
}