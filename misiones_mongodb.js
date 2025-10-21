use("bestiario");
// ============================  CREACIÓN (CREATE)  =====================================
// Insertar nuevas criaturas con insertOne()
db.criaturas.insertOne({
nombre: "Dragón Arcoíris",
habitat: "Praderas Místicas",
nivel_peligro: 8,
dieta: ["nubes", "sacrificios mágicos"],
habilidades: ["vuelo", "proyección de luz", "cambio de color"],
estadisticas: { ataque: 50, defensa: 40, velocidad: 90 },
descubierto_por: "Elena de Arlandia"
});
db.criaturas.insertOne({
nombre: "Dragón de las Sombras",
habitat: "Montañas Volcánicas",
nivel_peligro: 8,
dieta: ["luz nocturna", "caballeros"],
habilidades: ["vuelo", "aliento de fuego", "invisibilidad"],
estadisticas: { ataque: 95, defensa: 50, velocidad: 20 },
descubierto_por: "Estoico el Basto"
});
db.criaturas.insertOne({
nombre: "Colmillo Mortal",
habitat: "Villanía",
nivel_peligro: 10,
dieta: ["Fuego", "bebés dragón"],
habilidades: ["Respiración de fuego congelado", "flama congelante", "garras afiladas"],
estadisticas: { ataque: 25, defensa: 60, velocidad: 50 },
descubierto_por: "Eldrin el Valiente"
});
// Insertar múltiples criaturas con insertMany()
db.criaturas.insertMany([
{
nombre: "Furia Nocturna",
habitat: "Volcanes",
nivel_peligro: 10,
dieta: ["Rayos", "frutas místicas"],
habilidades: ["Dientes retráctiles", "camuflaje de noche", "velocidad supersónica"],
amigable: true,
descubierto_por: "Hipo"
},
{
nombre: "Furia Luminosa",
habitat: "Mundo Oculto",
nivel_peligro: 10,
dieta: ["Fuego", "animales grandes"],
habilidades: ["Camuflaje", "visión nocturna", "velocidad extrema"],
estadisticas: { ataque: 98, defensa: 80 },
descubierto_por: "Hipo"
},
{
nombre: "Látigo Afilado",
habitat: "Isla de las doncellas aladas",
nivel_peligro: 6,
dieta: ["guerreros caídos", "criaturas marinas"],
habilidades: ["lagrimas venenosas", "púas en la cola"],
edad_aproximada: 380,
descubierto_por: "Valka"
}
]);

// ============================  LECTURA (READ)  =====================================
// Mostrar todas las criaturas del bestiario
print("\n =================== CRIATURAS REGISTRADAS ========================");
printjson(db.criaturas.find().toArray());

// Consulta especifica para encontrar solo a las criaturas del habitad "Praderas Místicas" 
printjson(db.criaturas.find({ habitat: "Praderas Místicas" }).toArray());

// Consulta para encontrar criaturas que tengan un nivel de peligro mayor a 8
printjson(db.criaturas.find({ nivel_peligro: { $gt: 8 } }).toArray());

// ============================  ACTUALIZACIÓN (UPDATE)  =====================================
// Uso de updateOne() para añadir una nueva habilidad
db.criaturas.updateOne(
  { nombre: "Furia Nocturna" },
  { $push: { habilidades: "Lanza rayos de fuego" } }
);
