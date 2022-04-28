const db = require('../util/database');

module.exports = class Metricas {



    // static tiemposCat() {
    //     return db.execute(
    //         'SELECT nombre_categoria,(AVG((UNIX_TIMESTAMP(fecha_fin) - UNIX_TIMESTAMP(fecha_emision)) DIV 86400)) as "Tiempo promedio solucion (dias)" FROM categoria C, ticket T, genera_ticket GT, resuelve_ticket RT WHERE T.ID_categoria = C.ID_categoria AND T.ID_ticket = GT.ID_ticket AND T.ID_ticket = RT.ID_ticket GROUP BY T.ID_categoria ORDER BY nombre_categoria ASC'
    //     );
    // }
    static tiemposCat() {
        return db.execute(
            'SELECT (AVG((UNIX_TIMESTAMP(fecha_fin) - UNIX_TIMESTAMP(fecha_emision)) DIV 86400)) as info_metrica FROM categoria C, ticket T, genera_ticket GT, resuelve_ticket RT WHERE T.ID_categoria = C.ID_categoria AND T.ID_ticket = GT.ID_ticket AND T.ID_ticket = RT.ID_ticket GROUP BY T.ID_categoria ORDER BY nombre_categoria ASC'
        );
    }

    static nombresCat() {
        return db.execute(
            'SELECT nombre_categoria FROM categoria C ORDER BY nombre_categoria ASC'
        );
    }

    static fechas(){
        return db.execute(
            'SELECT CURRENT_DATE as Fechas UNION ALL SELECT (CURRENT_DATE() - INTERVAL 1 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 2 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 3 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 4 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 5 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 6 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 7 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 8 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 9 WEEK)UNION ALL SELECT (CURRENT_DATE() - INTERVAL 10 WEEK)')
    }
    static viewusuariote(id){
        return db.execute(
            'CREATE OR REPLACE VIEW temporal_resueltos AS (SELECT * from ticketstotal WHERE Encargado=?)',[id])
    }

    static ticketsemitidos(){
        return db.execute('SELECT week(now()) as Semana, COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=week(now()) UNION ALL SELECT (week(now())-1), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-1) UNION ALL SELECT (week(now())-2), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-2) UNION ALL SELECT (week(now())-3), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-3) UNION ALL SELECT (week(now())-4), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-4) UNION ALL SELECT (week(now())-5), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-5) UNION ALL SELECT (week(now())-6), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-6) UNION ALL SELECT (week(now())-7), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-7) UNION ALL SELECT (week(now())-8), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-8) UNION ALL SELECT (week(now())-9), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-9) UNION ALL SELECT (week(now())-10), COUNT(*) AS fecha_emision FROM genera_ticket WHERE WEEK(genera_ticket.fecha_emision)=(week(now())-10)');
    }

    static ticketsresueltos(){
        return db.execute('SELECT week(now()) as Semana, COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=week(now()) UNION ALL SELECT (week(now())-1), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-1) UNION ALL SELECT (week(now())-2), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-2) UNION ALL SELECT (week(now())-3), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-3) UNION ALL SELECT (week(now())-4), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-4) UNION ALL SELECT (week(now())-5), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-5) UNION ALL SELECT (week(now())-6), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-6) UNION ALL SELECT (week(now())-7), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-7) UNION ALL SELECT (week(now())-8), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-8) UNION ALL SELECT (week(now())-9), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-9) UNION ALL SELECT (week(now())-10), COUNT(*) AS fecha_fin FROM resuelve_ticket WHERE WEEK(resuelve_ticket.fecha_fin)=(week(now())-10)');
    }

    static ticketsresueltos_usuario(){
        return db.execute('SELECT week(now()) as Semana, COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=week(now()) UNION ALL SELECT (week(now())-1), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-1) UNION ALL SELECT (week(now())-2), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-2) UNION ALL SELECT (week(now())-3), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-3) UNION ALL SELECT (week(now())-4), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-4) UNION ALL SELECT (week(now())-5), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-5) UNION ALL SELECT (week(now())-6), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-6) UNION ALL SELECT (week(now())-7), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-7) UNION ALL SELECT (week(now())-8), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-8) UNION ALL SELECT (week(now())-9), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-9) UNION ALL SELECT (week(now())-10), COUNT(*) AS fecha_fin FROM temporal_resueltos WHERE WEEK(temporal_resueltos.fecha_fin)=(week(now())-10)')
    }
}