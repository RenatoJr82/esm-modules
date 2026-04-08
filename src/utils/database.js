const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataName) {
    //lógica
    console.log("conectando ao banco " + dataName);
}

async function diconnectDatabase() {
    console.log("desconectando do banco");
}

// export default connectToDatabase; // Padrão exportar uma função

export { connectToDatabase, diconnectDatabase, databaseType}; // modo para exportação de mais de uma função