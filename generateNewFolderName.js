// lista de strings
const names = ["New Folder", "New Folder (3)", "New Folder (4)" ];
// Reglas para generar un nombre de directorio nuevo.
// "New Folder (1)" no existe.
// Debe retornar New Folder seguido de numero en orden accendente si no fue utilizado aun, 
// osea estar en la lista.

const functionGenerate = (list) => {
    // 
    for (let i = 2; i <= list.length; i++) {
        if (list.includes("New Folder (" + i + ")")) {
        }else{
            return "New Folder (" + i + ")";     
        }
    }
    return "New Folder (" + (list.length + 1) + ")";
     
}
console.log(functionGenerate(names));