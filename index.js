db.collection('tareas').find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
  const query = { "titulo": "Ir al gimnasio" };
  
  db.collection('tareas').deleteOne(query, function(err, obj) {
    if (err) throw err;
    console.log("Documento eliminado");
    client.close();
  });
  // Actualizar el estado de una tarea
  const query = { "titulo": "Ir al gimnasio" };
  const newValues = { $set: { "estado": "Completada" } };
  
  db.collection('tareas').updateOne(query, newValues, function(err, res) {
    if (err) throw err;
    console.log("Documento actualizado");
    client.close();
  });